import '../style/features.css';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

export default function Gallery() {
    return (
      <div className="feature-section">
        <div className="featureBox">
            <img src={icon1} alt="Ironhack logo" />
            <h3>Declarative</h3>
            <p>You will learn how to use<br></br> the most popular frontend library, <br></br>and become a super Ninja developer.</p>
        </div>
        <div className="featureBox">
            <img src={icon2} alt="Ironhack logo" />
            <h3>Declarative</h3>
            <p>You will learn how to use<br></br> the most popular frontend library, <br></br>and become a super Ninja developer.</p>
        </div>
        <div className="featureBox">
            <img src={icon3} alt="Ironhack logo" />
            <h3>Declarative</h3>
            <p>You will learn how to use<br></br> the most popular frontend library, <br></br>and become a super Ninja developer.</p>
        </div>
        <div className="featureBox">
            <img src={icon4} alt="Ironhack logo" />
            <h3>Declarative</h3>
            <p>You will learn how to use<br></br> the most popular frontend library, <br></br>and become a super Ninja developer.</p>
        </div>
      </div>
    );
}