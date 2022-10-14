import { useParams } from 'react-router-dom';
import AccomodationList from '../data/logements.json';
import Carousel from '../components/Carousel';
import Tag from '../components/Tag';
import DropDown from '../components/DropDown';
import '../styles/AccomodationForm.css';

function AccomodationForm() {

    //Get Accomodation id from URL
    const { id } = useParams();

    const accomodationSearched = AccomodationList.find((accomodation)=> accomodation.id===id);

    const tags = accomodationSearched.tags
    const host = accomodationSearched.host
    const equipments = accomodationSearched.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })

    return (
        <div className='kasa-accomodation'>
            <div className='accomodation-header'>
                <Carousel images={accomodationSearched.pictures}/>
                <div className='accomodation-location'>
                    <h1>{accomodationSearched.title}</h1>
                    <h2>{accomodationSearched.location}</h2>
                    {tags.map((tag,index) => (
                    <Tag key={`${tag}-${index}`} text={tag}/>))}
                </div>
                <div className='accomodation-host'>
                    <span>{host.name}</span>
                    <img src={host.picture} alt='Host'/>
                </div>
            </div>
            <div className='accomodation-details'>
                <DropDown title={'Description'} description={accomodationSearched.description}/>
                <DropDown title={'Equipements'} description={equipments}/>
            </div>
       </div>
       );
}
export default AccomodationForm;