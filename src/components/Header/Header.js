import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="kasa-header">
      <img src={logo} className="kasa-logo" alt="logo"></img>
      <nav className="kasa-navbar">
        <NavLink end to="/" className="kasa-link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="kasa-link">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
