export default function Form() {
  const handleClick = e => {
    e.preventDefault();
    console.log('clicked');
  };

  return (
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

      <button id="btn__get--meme" onClick={handleClick}>
        Get a new meme image 🖼
      </button>
    </form>
  );
}
