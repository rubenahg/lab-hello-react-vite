import '../style/hero.css';
import ironHackLogo from '../assets/ironhack-logo-xs.png';
import menuIcon from '../assets/menu-top-xs.png';

export default function Gallery() {
    return (
      <div className="hero-section">
        <img src={ironHackLogo} alt="Ironhack logo" />
        <img src={menuIcon} className='menuIcon' alt="Ironhack logo" />
        <h2>Say hello to<br></br>ReactJS</h2>
        <p>You will learn how to use<br></br> the most popular frontend library, <br></br>and become a super Ninja developer.</p>
        <a href="#" className='awesomeButton'>Awesome!</a>
      </div>
    );
}