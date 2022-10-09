import {useState} from 'react';
import '../styles/DropDown.css';
import ArrowUp from '../assets/ArrowUp.png';
import ArrowDown from '../assets/ArrowDown.png'

function DropDown({ title, description }) {
 
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className='kasa-dropdown' key={`dropdown-${title}`}>
        <div className='dropdown-header'>
            <div className='dropdown-title'>{title}</div>
            <a
                className='dropdown-arrow'
                href={`#dropdown-${title}`}
                onClick={() => setIsOpen(false)}
            >
                <img src={ArrowUp} alt='dropdown open' />
            </a>
        </div>
        <div className='dropdown-description'>{description}</div>
    </div>
    ) : (
    <div className='kasa-dropdown' key={`dropdown-${title}`}>
        <div className='dropdown-header'>
            <div className='dropdown-title'>{title}</div>
            <a
                className='dropdown-arrow'
                href={`#dropdown-${title}`}
                onClick={() => setIsOpen(true)}
            >
                <img src={ArrowDown} alt='dropdown close' />
            </a>
        </div>
    </div>
    );
}

export default DropDown;
