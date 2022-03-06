import './index.css';
import Profile from './Image1.jpeg';

function About(){
    return(
        <div className="about-comp">
            <img src={Profile} className="about-cont"></img>
            <p className="about-cont name">Innocent BYIRINGIRO</p>
            <p className="about-cont">Email:ibyiringiro99@gmail.com</p>
            <p className="about-cont">Address: KG 1866</p>
            <p className="about-cont">Tel: +250783801791</p>
            
        </div>
    )
}
export default About;