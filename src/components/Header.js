import logo from '../assets/logo.svg';
import '../styles/Header.css';

function Header() {
  return (
    <header className='kasa-header'>
      <img src={logo} className='kasa-logo' alt='logo'></img>
      <nav className='kasa-navbar'>
        <a href='#'>Accueil</a>
        <a href='#'>A propos</a>
      </nav>
    </header>
  );
}
export default Header;
