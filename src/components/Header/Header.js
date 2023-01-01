import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
      <header className="header">
        <h1 className="logo" id="home">PJ</h1>
        <Navbar />
      </header>
  );
};

export default Header;
