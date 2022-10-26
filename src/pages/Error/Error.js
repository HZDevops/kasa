import { NavLink } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <div className="kasa-error">
      <h1 className="error-title">404</h1>
      <span className="error-description">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <NavLink to="/" className="error-link">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}
export default Error;
