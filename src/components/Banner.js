import '../styles/Banner.css';

function Banner({image, text}) {
  return (
    <div className='kasa-banner'>
      <img className='banner-img' src={image} alt='Banner' />
      <div className='banner-dark'></div>
      <span className='banner-txt'>{text}</span>
    </div>
  );
}

export default Banner;
