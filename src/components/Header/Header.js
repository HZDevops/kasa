import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg';
import './Header.css';

function Header() {

  return (
    <header className='kasa-header'>
      <img src={logo} className='kasa-logo' alt='logo'></img>
      <nav className='kasa-navbar'>
        <NavLink to='/' className='home-link' style={({ isActive }) => isActive ? {textDecoration: 'underline'} : { textDecoration: 'none' }}>Accueil</NavLink>
        <NavLink to='/about' className='about-link' style={({ isActive }) => isActive ? {textDecoration: 'underline'} : { textDecoration: 'none' }}>A Propos</NavLink>
      </nav>
    </header>
  );
}
export default Header;
