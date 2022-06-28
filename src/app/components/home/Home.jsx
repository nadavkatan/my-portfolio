import React, { useState } from "react";
import Greeting from "../greeting/Greeting";
import Navbar from "../navbar/Navbar";
import nadav from "../../assets/images/nadav.jpg";
import "./styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [githubHovered, setGithubHovered] = useState(false);
  const [linkedInHovered, setLinkedInHovered] = useState(false);
  const [facebokkHovered, setFacebokkHovered] = useState(false);

  library.add(faCheckSquare, faCoffee, faGithub, faLinkedinIn, faFacebookF);

  return (
    <div className="home-container">
      <Greeting />
      <img src={nadav} className="nadav-avatar" alt="nadav-avatar" />
      <div className="icons-container">
        <FontAwesomeIcon
          color="white"
          size="2x"
          name="github"
          icon={["fab", "github"]}
          onMouseOver={() => setGithubHovered(true)}
          onMouseLeave={() => setGithubHovered(false)}
          bounce={githubHovered}
        />
        <FontAwesomeIcon
          color="white"
          size="2x"
          name="linkedIn"
          icon={["fab", "linkedin-in"]}
          onMouseOver={() => setLinkedInHovered(true)}
          onMouseLeave={() => setLinkedInHovered(false)}
          bounce={linkedInHovered}
        />
        <FontAwesomeIcon
          color="white"
          size="2x"
          name="facebook"
          icon={["fab", "facebook-f"]}
          onMouseOver={() => setFacebokkHovered(true)}
          onMouseLeave={() => setFacebokkHovered(false)}
          bounce={facebokkHovered}
        />
      </div>
    </div>
  );
};

export default Home;
