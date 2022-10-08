import Banner from './Banner';
import Thumb from './Thumb';
import '../styles/Home.css';
import BannerImage from '../assets/BannerImage.png';
import AccomodationList from '../data/logements.json';

function Home() {
  return (
    <div className='kasa-home'>
      <Banner image={BannerImage} text='Chez vous, partout et ailleurs' />
      <div className='accomodation-list'>
        {AccomodationList.map((accomodation) => (
            <Thumb
            key={accomodation.id}
            id={accomodation.id}
            image={accomodation.cover}
            titre={accomodation.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
