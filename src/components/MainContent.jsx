import { useEffect, useState } from 'react';

export default function MainContent() {
  // Meme object state
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    imageUrl: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  // Meme Array state
  const [memeImages, setMemeImages] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setMemeImages(data.data.memes);
    }
    getMemes();
  }, []);

  // Get Meme Handler
  function getMemeImage(e) {
    e.preventDefault();
    // Generate random number to use to select a random img url
    const randomNum = Math.round(Math.random() * 100);
    const allUrls = memeImages.map(memeData => memeData.url); // Use map method to get all image urls
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        imageUrl: allUrls.at(randomNum),
      };
    }); // change the value of the current meme image url
    console.log(randomNum, meme.imageUrl);
    // console.log(allUrls);
  }

  return (
    <main>
      <form className="form__get-meme">
        <div className="form--control">
          <input
            id="meme-input__top-text"
            type="text"
            name="topText"
            placeholder="Shut up"
            value={meme.topText}
            onChange={handleChange}
          />
        </div>

        <div className="form--control">
          <input
            id="meme-input__bottom-text"
            type="text"
            name="bottomText"
            placeholder="and take my money"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

        <button id="btn__get--meme" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>

      <div className="meme--container">
        {meme.imageUrl && (
          <img className="meme--img" src={meme.imageUrl} alt="meme" />
        )}
        <h2 className="meme--top-text">{meme.topText}</h2>
        <h2 className="meme--bottom-text">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
