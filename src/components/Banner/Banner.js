import './Banner.css';

function Banner({image, text}) {
  return (
    <div className='kasa-banner'>
      <img className='banner-img' src={image} alt='Banner' />
      <div className='banner-dark'></div>
      <p className='banner-txt'>{text}</p>
    </div>
  );
}

export default Banner;
