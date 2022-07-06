import Navbar from "./app/components/navbar/Navbar";
import Home from "./app/components/home/Home";
import ProjectsStripe from "./app/components/projectsStripe/ProjectsStripe";
import About from "./app/components/about/About";
import Contact from "./app/components/contact/Contact";
import { Box, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import "./styles/styles.css";

function App() {
  const theme = createTheme({});
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        {!isSmallScreen && <Navbar />}
        <Box className={isSmallScreen ? "sm-screen-section" : "section"}>
        <Home />
        </Box>
        <Box className={isSmallScreen ? "sm-screen-section" : "section"}>
        <ProjectsStripe />
        </Box>
        <Box className={isSmallScreen ? "sm-screen-section" : "section"}>
        <About />
        </Box>
        <Box className={isSmallScreen ? "sm-screen-section" : "section"}>
        <Contact />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
