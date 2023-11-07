import { Link } from "react-router-dom";
import '../styles/Header.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <header className="header"> 
      <Link to='/'><FontAwesomeIcon icon={faHouse} className="home-icon"/></Link> 
      <Link to='/durak' className="nav-link">Durak</Link> 
      <Link to='/poker' className="nav-link">Poker</Link> 
      <Link to='/patience' className="nav-link">Patience</Link> 
    </header>
  );
}
