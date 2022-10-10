import { Link } from 'react-router-dom'
import Banner from '../components/Banner';
import Thumb from '../components/Thumb';
import '../styles/Home.css';
import BannerImage from '../assets/BannerImage.png';
import AccomodationList from '../data/logements.json';

function Home() {
  return (
    <div className='kasa-home'>
      <Banner image={BannerImage} text='Chez vous, partout et ailleurs' />
      <div className='accomodation-list'>
        {AccomodationList.map((accomodation) => (
            <Link key={accomodation.id} to={'/accomodation/'+accomodation.id+'/#'}>
              <Thumb
                key={accomodation.id}
                id={accomodation.id}
                image={accomodation.cover}
                titre={accomodation.title}
              />
            </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
