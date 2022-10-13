import { useParams } from 'react-router-dom';
import AccomodationList from '../data/logements.json';
import Carousel from '../components/Carousel';
import Tag from '../components/Tag';
import DropDown from '../components/DropDown';

function AccomodationForm() {

    //Get Accomodation id from URL
    const { id } = useParams();

    const accomodationSearched = AccomodationList.find((accomodation)=> accomodation.id===id);

    const tags = accomodationSearched.tags
    const host = accomodationSearched.host

    return (
        <div className='kasa-accomodation'>
            <div className='accomodation-header'>
                <Carousel images={accomodationSearched.pictures}/>
                <h1>{accomodationSearched.title}</h1>
                <h2>{accomodationSearched.location}</h2>
                {tags.map((tag,index) => (
                <Tag key={`${tag}-${index}`} text={tag}/>))}
                <div className='accomodation-host'>
                    <span>{host.name}</span>
                    <img src={host.picture} alt='Host'/>
                </div>
                <div>{accomodationSearched.rating}</div>
            </div>
            <div className='accomodation-details'>
                <DropDown title={'Description'} description={accomodationSearched.description}/>
                <DropDown title={'Equipements'} description={accomodationSearched.equipments}/>
            </div>
       </div>
       );
}
export default AccomodationForm;