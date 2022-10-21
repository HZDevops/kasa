import { useParams } from 'react-router-dom';
import AccomodationList from '../../data/logements.json';
import Carousel from '../../components/Carousel/Carousel';
import Tag from '../../components/Tag/Tag';
import DropDown from '../../components/DropDown/DropDown';
import './AccomodationForm.css';
import fullStar from '../../assets/fullStar.png';
import star from '../../assets/star.png';

function AccomodationForm() {

    //Get Accomodation id from URL
    const { id } = useParams();

    //Get Accomodation Form from database
    const accomodationSearched = AccomodationList.find((accomodation)=> accomodation.id===id);

    //Get tags from accomodation selected
    const tags = accomodationSearched.tags;

    //Get host details from accomodation selected
    const host = accomodationSearched.host;

    //Get rating note of the accomodation
    let accomodationRate = [];
    let fullStarRate = true;

    for (let index = 0; index < 5; index++) {
        if(index === parseInt(accomodationSearched?.rating)) {
            fullStarRate = false;
        }
        if(fullStarRate === true) {
            accomodationRate.push(<img key={index} src={fullStar} alt={`${accomodationSearched.rating}/5`}/>)
        } else {
            accomodationRate.push(<img key={index} src={star} alt={`${accomodationSearched.rating}/5`}/>)
        }
    }

    //Get equipments list of the accomodation
    const equipments = accomodationSearched.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    });

    return (
        <div className='kasa-accomodation'>
            <div className='accomodation-header'>
                <Carousel key={accomodationSearched.pictures} images={accomodationSearched.pictures}/>
                <div className='accomodation-location'>
                    <h1>{accomodationSearched.title}</h1>
                    <h2>{accomodationSearched.location}</h2>
                    {tags.map((tag,index) => (
                    <Tag key={`${tag}-${index}`} text={tag}/>))}
                    
                </div>
                <div className='accomodation-host'>
                    <span>{host.name}</span>
                    <img className='host-picture' src={host.picture} alt='Host'/>
                    <div className='host-rating'>{accomodationRate}</div>
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