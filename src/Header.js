import './Header.css';

function Header() {
    return (
<>
  <title>My Portfolio</title>
  <link rel="stylesheet" type="text/css" href="Header.css" />
  <header>
    <div className="logo">
        <h1>Laith Khi</h1>
    </div>
    <nav>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  {/* Other content goes here */}
</>
    );
}

export default Header;