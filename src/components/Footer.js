import FooterLogo from '../assets/FooterLogo.png';

function Footer() {
  return (
    <footer className='kasa-footer'>
      <div className='footer-container'>
        <img src={FooterLogo} alt='Logo footer' />
        <p>&copy; 2022 Kasa. Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;
