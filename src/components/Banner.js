import banner from '../assets/banner-img.png';
import '../styles/Banner.css';

function Banner() {
  return (
    <div className='kasa-banner'>
      <img className='banner-img' src={banner} alt='Banner' />
      <div className='banner-dark'></div>
      <span className='banner-txt'>Chez vous, partout et ailleurs</span>
    </div>
  );
}

export default Banner;
