
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Footer from './Components/Footer.js';
import Nav from './Components/Nav.js';
import Projects from './Projects.js';
import Blogs from './Blogs.js';
import About from './About.js';

function Homepage() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <div>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Projects.js">
              <Projects 
                img="./Image1.jpeg"
                name="calculatoer"
                link="link one"
              />
              <Projects 
                img="./Images/Image2.jpeg"
                name="portfolio"
                link="link two"
              />
              <Projects 
                img="./Images/Image3.jpeg"
                name="CV"
                link="link three"
              />
            </Route>
            <Route path="/Blogs.js">
              <Blogs />
            </Route>
            <Route path="/About.js">
              <About />
            </Route>
            </div>
          </Switch>
        <Footer />
    </div>
    </Router>
  );
}

export default Homepage;
