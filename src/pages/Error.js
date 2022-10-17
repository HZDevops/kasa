import { Link } from 'react-router-dom';
import '../styles/Error.css'

function Error() {
  return (
    <div className='kasa-error'>
      <h1 className='error-title'>404</h1>
      <span className='error-description'>Oups! La page que vous demandez n'existe pas.</span>
      <Link to='/' className='error-link'>Retourner sur la page d’accueil</Link>
    </div>
  )
 } 
 export default Error;