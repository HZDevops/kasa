import { useParams } from 'react-router-dom';
import AccomodationList from '../data/logements.json';
import Tag from '../components/Tag';
import Thumb from '../components/Thumb';
import DropDown from '../components/DropDown';

function Accomodation() {
const {id} = useParams();

function getAccomodation () {
    let AccomodationSearched = AccomodationList.find(location=> location.id=id);
    return AccomodationSearched
}

const accomodation = getAccomodation();

return (
    <div className='kasa-accomodation'>
        <img src={accomodation.cover} alt='accomodation'/>
        <h1>{accomodation.title}</h1>
        <h2>{accomodation.location}</h2>
        

    </div>
);
}
export default Accomodation;