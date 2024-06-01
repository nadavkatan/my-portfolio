import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Carousel } from "react-responsive-carousel";
import mongoLogo from "../../assets/images/mongo-logo.png";
import expressLogo from "../../assets/images/express-logo.png";
import socketLogo from "../../assets/images/socket-logo.png";
import muiLogo from "../../assets/images/mui-logo.png";
import typescriptLogo from "../../assets/images/typescript-logo.png";
import {
  faReact,
  faNode,
  faGit,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./styles/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BackgroundHome from "../backgroundHome/BackgroundHome";
import { useMediaQuery } from "@mui/material";

const About = () => {
  library.add(
    faReact,
    faNode,
    faGit,
    faJsSquare,
    faHtml5,
    faCss3Alt,
    faSass,
    faBootstrap
  );
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <div className="about-wrapper">
      {/* <BackgroundHome/> */}
      <Grid container spacing={3} className="about-container">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            style={{ fontSize: isSmallScreen ? "3em" : "5em" }}
          >
            About Me
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ lineHeight: "2em", textAlign: "justify" }}
          >
            My name is Nadav, and I am passionate about music, coding, and
            pedagogy. Fortunately, I am able to pursue all of my passions
            professionally. <br />I have spent most of my life being a classical
            musician, a pianist. I played in concerts and competitions around
            the world, and even obtained a PhD in the Arts, conducting an
            artistic research in music. <br /> In the last two years, I have
            been working as a full stack developer at Aaltra, a software company
            and digital partner based in Ghent. Here, I have developed
            innovative applications, working on frontend, backend, and iOS
            technologies, all with the ultimate ambition of{" "}
            <a
              style={{ color: "white" }}
              href="https://www.aaltra.eu/"
              rel="noreferrer"
              target="_blank"
            >
              "connecting humans and machines"
            </a>{" "}
            <br />
            Pedagogy is in my blood. Coming from a lineage of educators, I have
            taught students ranging from children as young as 5 years old to
            seniors up to 91, and from total beginners to advanced academics. I
            strongly believe in the power of interactive learning and constantly
            strive to reinforce students' creative agency and problem solving
            skills. <br />
            I'm always excited to connect with like-minded individuals and
            explore new opportunities. Feel free to reach out if you'd like to
            discuss music, technology, education, or potential collaborations.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="carousel-container">
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
            <img
              src={socketLogo}
              alt="socket-io-logo"
              className="carousel-slide"
            />
            <FontAwesomeIcon
              color="#0DFDD7"
              size="10x"
              name="react"
              icon={["fab", "react"]}
            />
            <FontAwesomeIcon
              color="#0DFDD7"
              size="10x"
              name="node"
              icon={["fab", "node"]}
            />
            <img
              src={expressLogo}
              alt="express-logo"
              className="carousel-slide"
            />
            <FontAwesomeIcon
              color="#0DFDD7"
              size="10x"
              name="git"
              icon={["fab", "git"]}
            />
            <img src={mongoLogo} alt="mongo-logo" className="carousel-slide" />
            <FontAwesomeIcon
              color="#0DFDD7"
              size="10x"
              name="js"
              icon={["fab", "js-square"]}
            />
            <img
              src={typescriptLogo}
              alt="typescript-logo"
              className="carousel-slide"
            />
            <FontAwesomeIcon
              color="#0DFDD7"
              size="10x"
              name="html"
              icon={["fab", "html5"]}
            />
            <FontAwesomeIcon
              color="#0DFDD7"
              size="10x"
              name="css"
              icon={["fab", "css3-alt"]}
            />
            <FontAwesomeIcon
              color="#0DFDD7"
              size="10x"
              name="sass"
              icon={["fab", "sass"]}
            />
            <FontAwesomeIcon
              color="#0DFDD7"
              size="10x"
              name="bootstrap"
              icon={["fab", "bootstrap"]}
            />
            <img src={muiLogo} alt="mui-logo" className="carousel-slide" />
          </Carousel>
        </Grid>
      </Grid>
    </div>
  );
};
export default About;
