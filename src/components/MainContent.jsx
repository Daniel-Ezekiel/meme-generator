import { useEffect, useState } from 'react';

export default function MainContent() {
  // Setting states for inputs and fetch response data
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImages, setMemeImages] = useState([]);
  const [imgUrl, setImgUrl] = useState('');

  let allMemes;
  // useEffect hook to handle fetch API request
  useEffect(() => {
    const url = `https://api.imgflip.com/get_memes`;

    // Fetching the data from the Get-Memes API
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(res => {
        allMemes = res.data.memes;
        // console.log(allMemes);
        setMemeImages(allMemes);
      })
      .catch(err => {
        console.log(`error ${err}`);
      });
  }, []);

  // Button click handler
  const handleClick = e => {
    e.preventDefault();
    // Generate random number to use to select a random img url
    const randomNum = Math.round(Math.random() * 100);
    const allUrls = memeImages.map(memeData => memeData.url); // Use map method to get all image urls
    setImgUrl(allUrls.at(randomNum)); // change the value of the current image url
    console.log(randomNum, imgUrl);
    // console.log(allUrls);
    // console.log('clicked');
  };

  return (
    <main>
      <form className="form__get-meme">
        <div className="form--control">
          <input
            id="meme-input__top-text"
            type="text"
            name="top-text"
            placeholder="Shut up"
            value={topText}
            onChange={e => setTopText(e.target.value)}
          />
        </div>

        <div className="form--control">
          <input
            id="meme-input__bottom-text"
            type="text"
            name="bottom-text"
            placeholder="and take my money"
            value={bottomText}
            onChange={e => setBottomText(e.target.value)}
          />
        </div>

        <button id="btn__get--meme" onClick={handleClick}>
          Get a new meme image 🖼
        </button>
      </form>

      <div className="meme--container">
        {imgUrl && <img className="meme--img" src={imgUrl} alt="meme" />}
        <h2 className="meme--top-text">{topText}</h2>
        <h2 className="meme--bottom-text">{bottomText}</h2>
      </div>
    </main>
  );
}
