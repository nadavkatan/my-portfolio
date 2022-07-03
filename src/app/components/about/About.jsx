import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Carousel } from "react-responsive-carousel";
import mongoLogo from "../../assets/images/mongo-logo.png";
import expressLogo from '../../assets/images/express-logo.png';
import socketLogo from '../../assets/images/socket-logo.png';
import muiLogo from '../../assets/images/mui-logo.png';
import {
    faReact,
    faNode,
    faGit,
    faJsSquare,
    faHtml5,
    faCss3Alt,
    faSass,
    faBootstrap
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./styles/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = () => {

    library.add(faReact, faNode, faGit, faJsSquare, faHtml5, faCss3Alt, faSass, faBootstrap);


  return (
    <div className="about-wrapper">
      <Grid container spacing={3} className="about-container">
        <Grid item xs={6}>
          <Typography variant="h1">About Me</Typography>
          <Typography variant="subtitle2">
            My name is Nadav, and for the last 13 years I have been a classical
            musician, a pianist. I played in concerts and competitions, and
            taught a countless amount of students. I have a Master's degree in
            piano performance, and soon also a PhD. <br />
            During covid I was lucky to discover coding and web development as
            another passion of mine, and to see that the tools that I aqcuired
            in my years as a musician, such as creativity and systematic problem
            solving can be extremely helpful in web development. <br />
          </Typography>
        </Grid>
        <Grid item xs={6} className="carousel-container">
          <Carousel 
          className="carousel"
          infiniteLoop
          autoPlay
          interval={2000}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          >
            {/* <div> */}
              <img src={socketLogo} alt="socket-io-logo" className="carousel-slide"/>
              <FontAwesomeIcon
              color="#0DFDD7"
              size="7x"
              name="react"
              icon={["fab", "react"]}
            />
              <FontAwesomeIcon
              color="#0DFDD7"
              size="7x"
              name="node"
              icon={["fab", "node"]}
            />
             <img src={expressLogo} alt="express-logo" className="carousel-slide"/>
              <FontAwesomeIcon
              color="#0DFDD7"
              size="7x"
              name="git"
              icon={["fab", "git"]}
            />
             <img src={mongoLogo} alt="mongo-logo" className="carousel-slide"/>
              <FontAwesomeIcon
              color="#0DFDD7"
              size="7x"
              name="js"
              icon={["fab", 'js-square']}
            />
            <FontAwesomeIcon
              color="#0DFDD7"
              size="7x"
              name="html"
              icon={["fab", 'html5']}
            />
            <FontAwesomeIcon
              color="#0DFDD7"
              size="7x"
              name="css"
              icon={["fab", 'css3-alt']}
            />
            <FontAwesomeIcon
              color="#0DFDD7"
              size="7x"
              name="sass"
              icon={["fab", 'sass']}
            />
            <FontAwesomeIcon
              color="#0DFDD7"
              size="7x"
              name="bootstrap"
              icon={["fab", 'bootstrap']}
            />
            <img src={muiLogo} alt="mui-logo" className="carousel-slide"/>
          </Carousel>
        </Grid>
      </Grid>
    </div>
  );
};
//  express
export default About;
