import {useState} from 'react';
import './DropDown.css';
import Arrow from '../../assets/ArrowDown.png';

function DropDown({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);
   
    return isOpen ? (
    <div className='kasa-dropdown' id={`dropdown-${title}`}>
        <div className='dropdown-header'>
            <div className='dropdown-title'>{title}</div>
            <a
                className={`dropdown-arrow ${isOpen}`}
                href={`#dropdown-${title}`}
                onClick={() => setIsOpen(false) }
            >
                <img src={Arrow} alt='dropdown open' />
            </a>
        </div>
        <div className='dropdown-description'>{description}</div>
    </div>
    ) : (
    <div className='kasa-dropdown' id={`dropdown-${title}`}>
        <div className='dropdown-header'>
            <div className='dropdown-title'>{title}</div>
            <a
                className={`dropdown-arrow ${isOpen}`}
                href={`#dropdown-${title}`}
                onClick={() => setIsOpen(true)}
            >
                <img src={Arrow} alt='dropdown close' />
            </a>
        </div>
    </div>
    );


    /*return (
        <div className='kasa-dropdown' id={`dropdown-${title}`}>
            <div className='dropdown-header'>
                <div className='dropdown-title'>{title}</div>
                <a
                    className={`dropdown-arrow ${isOpen}`}
                    href={`#dropdown-${title}`}
                    onClick={() => setIsOpen(true)}
                >
                    <img src={Arrow} alt='dropdown open' />
                </a>
            </div>
            { isOpen && <div className='dropdown-description'>{description}</div>}
        </div>
    );*/
}

export default DropDown;
