import "./Header.css";
import Logo from "../../assets/LogoSerie.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <img className="logo" src={Logo} alt="logo" />
        <NavBar />
      </div>
    </>
  );
};

export default Header;
