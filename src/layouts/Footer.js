import FooterLogo from '../assets/FooterLogo.png';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className='kasa-footer'>
     
        <img src={FooterLogo} alt='Logo footer' />
        <p>&copy; 2022 Kasa. Tous droits réservés</p>
    
    </footer>
  );
}

export default Footer;
