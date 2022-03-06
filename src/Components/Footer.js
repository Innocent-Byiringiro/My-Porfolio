import Facebook from './facebook.png';
import Instagram from './instagram.jpg';
import Twitter from './twitter.png';
import Linkedin from './linked.png';
import Gmail from './gmail.jpg';

function Footer(){
    return(
        <div className="footer">
               <ul>
                   <li><a><img class="img" src={Facebook}></img></a></li>
                   <li><a><img class="img" src={Instagram}></img></a></li>
                   <li><a><img class="img" src={Twitter}></img></a></li>
                   <li><a><img class="img" src={Linkedin}></img></a></li>
                   <li><a><img class="img" src={Gmail}></img></a></li>
               </ul>
           </div>
    )
}
export default Footer;