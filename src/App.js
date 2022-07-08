import { useState, useEffect, useRef } from "react";
import Navbar from "./app/components/navbar/Navbar";
import Home from "./app/components/home/Home";
import ProjectsStripe from "./app/components/projectsStripe/ProjectsStripe";
import About from "./app/components/about/About";
import Contact from "./app/components/contact/Contact";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";
import "./styles/styles.css";

function App() {
  const theme = createTheme({});
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const projectsElement = useRef();
  const homeElement = useRef();
  const aboutElement = useRef();
  const contactElement = useRef();
  const [focusedSection, setFocusedSection] = useState("Home");

  const scrollToSection = (element)=>{
    element.scrollIntoView({
      behavior:"smooth"
    })
  }


  useEffect(()=>{
    switch(focusedSection){
      case "Home":
        scrollToSection(homeElement.current);
        break;
      case "About":
        scrollToSection(aboutElement.current);
        break;
      case "Contact": 
        scrollToSection(contactElement.current);
        break;
        default: return;
    }
  },[focusedSection])


  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        {!isSmallScreen && <Navbar setFocusedSection={setFocusedSection}/>}
        <Box id="Home" ref={homeElement} className={isSmallScreen ? "sm-screen-section" : "section"}>
          <Home setFocusedSection={setFocusedSection} />
        </Box>
        <Box id="Projects" ref={projectsElement} className={isSmallScreen ? "sm-screen-section" : "section"}>
          <ProjectsStripe focusedSection={focusedSection} scrollToSection={scrollToSection} />
        </Box>
        <Box id="About" ref={aboutElement} className={isSmallScreen ? "sm-screen-section" : "section"}>
          <About />
        </Box>
        <Box id="Contact" ref={contactElement} className={isSmallScreen ? "sm-screen-section" : "section"}>
          <Contact />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
