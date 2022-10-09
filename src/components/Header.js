import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg';
import '../styles/Header.css';

function Header() {
  return (
    <header className='kasa-header'>
      <img src={logo} className='kasa-logo' alt='logo'></img>
      <nav className='kasa-navbar'>
        <Link to='/'>Accueil</Link>
        <Link to='a-propos'>A propos</Link>
      </nav>
    </header>
  );
}
export default Header;
