import memeImg from '../assets/memeimg.png';

export default function MainContent() {
  return (
    <main>
      <form className="form__get-meme">
        <div className="form--control">
          <input id="meme-input__top-text" type="text" placeholder="Shut up" />
        </div>

        <div className="form--control">
          <input
            id="meme-input__bottom-text"
            type="text"
            placeholder="and take my money"
          />
        </div>

        <button id="btn__get--meme" onClick={e => e.preventDefault()}>
          Get a new meme image 🖼
        </button>
      </form>

      <div className="meme--container">
        <img className="meme--img" src={memeImg} alt="meme" />
        <h2 className="meme--top-text">shut up</h2>
        <h2 className="meme--bottom-text">and take my money</h2>
      </div>
    </main>
  );
}
