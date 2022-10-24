import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="kasa-header">
      <img src={logo} className="kasa-logo" alt="logo"></img>
      <nav className="kasa-navbar">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "active-link" : "inactive-link";
          }}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => {
            return isActive ? "active-link" : "inactive-link";
          }}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
