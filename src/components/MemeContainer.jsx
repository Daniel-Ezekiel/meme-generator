import memeImg from '../assets/memeimg.png';

export default function MemeContainer() {
  return (
    <div className="meme--container">
      <img className="meme--img" src={memeImg} alt="meme" />
      <h2 className="meme--top-text">shut up</h2>
      <h2 className="meme--bottom-text">and take my money</h2>
    </div>
  );
}
