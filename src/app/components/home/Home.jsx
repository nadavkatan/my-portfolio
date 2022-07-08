import React, { useState } from "react";
import Greeting from "../greeting/Greeting";
import BackgroundHome from '../backgroundHome/BackgroundHome';
import Drawer from '../drawer/Drawer';
import nadav from "../../assets/images/facebook-profile.jpeg";
import "./styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "@mui/material";

const Home = ({setFocusedSection}) => {
  const [githubHovered, setGithubHovered] = useState(false);
  const [linkedInHovered, setLinkedInHovered] = useState(false);
  const [facebokkHovered, setFacebokkHovered] = useState(false);

  library.add(faCheckSquare, faCoffee, faGithub, faLinkedinIn, faFacebookF);
  const isSmallScreen = useMediaQuery(theme=>theme.breakpoints.down("md"));


  return (
    <div className={isSmallScreen ? "sm-screen-home-wrapper" : "home-wrapper"}>
    <BackgroundHome/>
    <div className="home-container">
    {isSmallScreen && <Drawer setFocusedSection={setFocusedSection}/>}
      <Greeting />
      <img src={nadav} className="nadav-avatar" alt="nadav-avatar" />
      <div className="icons-container">
        <div className="icon">
          <a
            href="https://github.com/nadavkatan"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              color={githubHovered ? "#0DFDD7" : "white"}
              size="2x"
              name="github"
              icon={["fab", "github"]}
              onMouseOver={() => setGithubHovered(true)}
              onMouseLeave={() => setGithubHovered(false)}
              bounce={githubHovered}
            />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/nadav-katan-5914661b7/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              color={linkedInHovered ? "#0DFDD7" : "white"}
              size="2x"
              name="linkedIn"
              icon={["fab", "linkedin-in"]}
              onMouseOver={() => setLinkedInHovered(true)}
              onMouseLeave={() => setLinkedInHovered(false)}
              bounce={linkedInHovered}
            />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://www.facebook.com/nadav.katan/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              color={facebokkHovered ? "#0DFDD7" : "white"}
              size="2x"
              name="facebook"
              icon={["fab", "facebook-f"]}
              onMouseOver={() => setFacebokkHovered(true)}
              onMouseLeave={() => setFacebokkHovered(false)}
              bounce={facebokkHovered}
            />
          </a>
        </div>
      </div>

    </div>

    </div>
  );
};

export default Home;
