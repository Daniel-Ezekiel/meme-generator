import trollMeme from '../assets/Troll Face.png';

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <h1 className="site--title">
          <img src={trollMeme} alt="meme-img" />
          Meme Generator
        </h1>

        <p className="project--id">React.js - Mini Project</p>
      </nav>
    </header>
  );
}
