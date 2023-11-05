import { Link } from "react-router-dom";
import '../styles/Header.css'; 

export const Header = () => {
  return (
    <header className="header"> 
      <Link to='/durak' className="nav-link">Durak</Link> 
      <Link to='/poker' className="nav-link">Poker</Link> 
      <Link to='/patience' className="nav-link">Patience</Link> 
    </header>
  );
}
