
import { BrowserRouter as Routes, Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Footer from './Components/Footer.js';
import Nav from './Components/Nav';
import Projects from './Projects.js';
import Blogs from './Blogs';
import About from './About';
import Login from './Login.js';

function Homepage() {
  return (

      // <BrowserRouter>
      //   <Routes>
      //     <Route exact path="/"element={<Nav/>} />
      //     <Route exact path="/Home"element={<Home/>} />
      //     <Route exact path="/About"element={<About/>} />
      //     <Route exact path="/Blogs"element={<Blogs/>} />

      //   </Routes>
      // </BrowserRouter>




    <Routes>
     <div className="App">
       <Nav />
           <Switch>
             <div>
            <Route exact path="/">
              <Home />
             </Route>
              <Route path="/Projects.js">
              <Projects 
               img="./logo192.png"
               name="calculatoer"
               link="link one"
              />
             <Projects 
               img="./logo192.png"
               name="portfolio"
               link="link two"
               />
           <Projects 
              img="./logo192.png"
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
         <Route path="/Login.js">
             <Login />
          </Route>
            </div>
          </Switch>
         <Footer />
    </div>
    </Routes>
  )
}

export default Homepage;
