
import {Link} from 'react-router-dom';
function Nav(){
    return(
        <nav className="nav_bar">
            <p class="main_title">My Portfolio</p>
            <p>
                <ul><li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="./About.js" className="link">About Me</Link></li>
                    <li><Link to="./Blogs.js" className="link">Articles</Link></li>
                    <li><Link to="" className="link">Admin</Link></li>
                    <li><Link to="./Projects.js" className="link">My Work</Link></li>
                </ul>
            </p>
        </nav>
        
    )
}
export default Nav;