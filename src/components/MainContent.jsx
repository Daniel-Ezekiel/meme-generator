import { useState } from 'react';
import memeImg from '../assets/memeimg.png';

export default function MainContent() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const handleClick = e => {
    e.preventDefault();
    console.log('clicked');
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
        <img className="meme--img" src={memeImg} alt="meme" />
        <h2 className="meme--top-text">{topText || 'shut up'}</h2>
        <h2 className="meme--bottom-text">
          {bottomText || 'and take my money'}
        </h2>
      </div>
    </main>
  );
}
