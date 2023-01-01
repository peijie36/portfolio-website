import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="logo">PJ</h1>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
