import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <nav className="navbar">
        <a href="#home" className="navbar__item">
          Home
        </a>
        <a href="#projects" className="navbar__item">
          Projects
        </a>
        <a href="#skills" className="navbar__item">
          Skills
        </a>
        <a href="#contact" className="navbar__item">
          Contact
        </a>
        <a href="/">
          <span type="button" className="btn btn--primary">
            Resume
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
