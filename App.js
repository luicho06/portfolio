import React from "react";
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import MyNavbar from ".src/components/my-navbar/my-navbar.component";
import MyCarousal from ".src/components/my-carousal/my-carousal.component";
import MyTitleMessage from ".src/components/title-message/title-message.component";
import About from ".src/pages/about/about.component";
import Skills from ".src/pages/skills/skills.component";
import Container from "react-bootstrap/Container";
import TimeLine from ".src/components/projects-timeline/projects-timeline.component";
import Experience from ".src/pages/experience/experience.component";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactForm from ".src/pages/contact-form/contact-form.component";
import { Parallax } from "react-parallax";
import FooterPanel from ".src/components/footer/footer.component";

import ".src/App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
         <BrowserRouter>
         {/* <MyCarousal />
      <MyTitleMessage /> */}
      <MyNavbar />
     <Switch>
     {/* <MyNavbar /> */}
      <Route exact path='/' render={()=>{
        return(
          <div className="home">
          <MyCarousal />
          {/* change your message in this component */}
      <MyTitleMessage />  
          </div>
        )
      }}  />

<Route exact path='/about' render={()=>{
        return(
          <div className="about">
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            {/* about me */}
            <Container className="container-box rounded">
               
                <About />
             
            </Container>
          </div>
        </Parallax>
        {/* skills */}
        <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
{/* experience */}
      <div>
        <Container className="container-box rounded">
          
            <hr />

            <Experience />
          
        </Container>
      </div>
      </div> 
        )
      }}  />

<Route exact path='/projects' render={()=>{
        return(
          <div className="projects">
          <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
          </div>
        )
      }}  />

<Route exact path='/contact' render={()=>{
        return(
          <div className="contact">
          <Container className="container-box rounded">
        
          <hr />
          <ContactForm />
        
      </Container>
          </div>
        )
      }}  />

     </Switch>
   </BrowserRouter>
      
      <hr />
      <FooterPanel />


    </div>
  );
};

export default App;
