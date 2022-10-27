import { useMediaQuery } from "react-responsive";

import Header from "./Components/Header/Header";
import MobileHeader from "./Components/MobileHeader/MobileHeader";
import Grid from "@mui/material/Grid";
import LeftSide from "./Sections/Left_Side/LeftSide";
import About from "./Sections/About/About";
import AboutMe from "./Sections/AboutMe/AboutMe";
import Work from "./Sections/Work/Work";
import Projects from "./Sections/Projects/Projects";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import RightSide from "./Sections/Right_Side/RightSide";

import "./App.css";

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 860px)" });
  

  return (
    <div className="App">
      {isDesktop && <Header />}
      {!isDesktop && <MobileHeader />}
      <div className="grid-container">
        <Grid container spacing={0}>
          <Grid item xs={1}>
            <LeftSide />
          </Grid>
          <Grid item xs={10} className='center-section'>
            <div className="app-center-container">
              <section className="app-about-section page-section">
                <About />
              </section>
              <section className="app-about-me-section page-section" id="about-me-section">
                <AboutMe />
              </section>
              <section className="app-work-section page-section" id="work-section">
                <Work />
              </section>
              <section className="app-projects-section page-section" id="projects-section">
                <Projects />
              </section>
              <section className="app-contact-section page-section" id="contact-section">
                <Contact />
              </section>
            </div>
            <Footer />
          </Grid>
          <Grid item xs={1} className='rs'>
              <RightSide />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
