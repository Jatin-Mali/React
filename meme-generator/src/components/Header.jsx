import "./Header.css"
export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <img
          src="/src/assets/meme-logo.png"
          alt="Meme Generator logo"
          className="logo"
        />
        <h2>Meme Generator</h2>
      </div>
    </header>
  );
}
