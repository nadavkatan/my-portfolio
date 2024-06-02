import React, { useEffect, useRef } from "react";
import Spyke from "../spyke/Spyke";
import Shilo from "../shilo/Shilo";
import Earpong from "../earpong/Earpong";
import Gestalt from "../gestalt/Gestalt";
import InformedPhrasing from "../informedPhrasing/InformedPhrasing";
import ProjectSpecs from "../projectSpecs/ProjectSpecs";
import BackgroundHome from "../backgroundHome/BackgroundHome";
import "./styles/styles.css";
import { Grid, useMediaQuery } from "@mui/material";

const ProjectsStripe = ({ focusedSection, scrollToSection }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const titleElement = useRef();

  const spykeSubtitle =
    "Spyke is a Skype clone. It contains all the basic features of skype: Connecting, live chatting and video calling other Spyke users! It also includes awesome features such as live notifications, authentication, profile customizations and more! The main technologies I used to build this app are: React, Redux, Mongoose, Nodejs & Express, Passport js, Material Ui, Socket.io, and Peer js.";
  const spykeStyled =
    "Answer shira.paz's call on the right to view the project live, or decilne the call to check out the source code!";
  const shiloSubtitle =
    "Shilo is a Quizlet clone. It contains all the basic features of Quizlet: creating flashcards and organizing them in sets and folders. Users can also style their flashcard with a text editor and even add images to to the cards! The main technologies I used to build this app are: React, Mongoose, Nodejs & Express, Passport js, Material Ui, and CKeditor.";
  const shiloStyled =
    "Click the composer's pic to view the project live, or his name to see the source code";
  const earpongSubtitle =
    "Earpong! is an ear-training app for users to practice their relative pitch recognition. The app generates random sounds for the user to try and recognize. It is based on a famous ear-training exercise used in music colleges. Earpong! is a rather simple vanilla javascript app, one of the first ones that I have developed, but I love it! ";
  const earpongStyled =
    "Click the 'Play sound' button, listen carefully and try to recognize whether the played sound is 'C' or 'G'. Submit your answer by clicking the corresponding sound button. If you're correct, you will be redirected to the live project, if you're wrong, to the source code.";
  const informedPhrasingSubtitle =
    "Informed Phrasing is my doctoral research project. It delves into the intricate and often contentious relationship between music analysis and performance from an artistic, performative standpoint. With a primary focus on the Phrasing aspect of musical performance, the project explores the points of contact and interactions between Schenkerian analysis, Gestalt psychology, musical performance, and embodied music cognition. Through this exploration, a performative-analytical process emerged, firmly grounded in performance experience, with the aim of stimulating individual creativity and fostering expressivity";
  const informedPhrasingStyled =
    "Browse through the chapters of the dissertation by swiping the card left. To view the dissertation website, click either on a title of a chpater, which would open the specific chapter, or the title of the project, which would open its home-page.";
  const gestaltSubtitle = `"Gestalt" is a pedagogical application designed to interactively teach the principles of Gestalt psychology in visual and auditory perception. It presents the Gestalt principles interactively, discusses their limitations, and proposes a holistic body-minf alternative. This app is a checpter of my PhD dissertation, promoting an artistic approach to the relationships between music analysis and performance.`;
  const gestaltStyled =
    "Use the cursor as a bruch to circle a group of dots. To view the app live, circle the blue group. To see the source code, circle the yellow. If you circle both colors, the more prominently circled color will determine the window's destination.";

  useEffect(() => {
    if (focusedSection === "Projects") {
      scrollToSection(titleElement.current);
    }
  }, [focusedSection]);

  return (
    <>
      <Grid
        container
        spacing={3}
        className={
          isSmallScreen ? "sm-screen-project-container" : "project-container"
        }
      >
        <Grid
          item
          xs={12}
          md={6}
          className="project-stripe-grid-item"
          ref={titleElement}
        >
          <ProjectSpecs
            letter="S"
            title="pyke"
            transform={-43}
            subtitle={spykeSubtitle}
            styledText={spykeStyled}
          />
        </Grid>
        <Grid item xs={12} md={6} className="project-stripe-grid-item">
          <Spyke />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className={
          isSmallScreen
            ? "sm-screen-project-container reverse"
            : "project-container"
        }
      >
        <Grid
          item
          xs={12}
          md={6}
          className="project-stripe-grid-item reversed-item"
        >
          <InformedPhrasing />
        </Grid>

        <Grid item xs={12} md={6} className="project-stripe-grid-item">
          <ProjectSpecs
            letter="P"
            title="hrasing"
            transform={-42}
            subtitle={informedPhrasingSubtitle}
            styledText={informedPhrasingStyled}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className={
          isSmallScreen ? "sm-screen-project-container" : "project-container"
        }
      >
        <Grid item xs={12} md={6} className="project-stripe-grid-item">
          <ProjectSpecs
            letter="G"
            title="estalt game"
            transform={-54}
            subtitle={gestaltSubtitle}
            styledText={gestaltStyled}
          />
        </Grid>
        <Grid item xs={12} md={6} className="project-stripe-grid-item">
          <Gestalt />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className={
          isSmallScreen
            ? "sm-screen-project-container reverse"
            : "project-container"
        }
      >
        <Grid
          item
          xs={12}
          md={6}
          className="project-stripe-grid-item reversed-item"
        >
          <Shilo />
        </Grid>

        <Grid item xs={12} md={6} className="project-stripe-grid-item">
          <ProjectSpecs
            letter="S"
            title="hilo"
            transform={-43}
            subtitle={shiloSubtitle}
            styledText={shiloStyled}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        className={
          isSmallScreen ? "sm-screen-project-container" : "project-container"
        }
      >
        <Grid item xs={12} md={6} className="project-stripe-grid-item">
          <ProjectSpecs
            letter="E"
            title="arpong!"
            transform={-36}
            subtitle={earpongSubtitle}
            styledText={earpongStyled}
          />
        </Grid>
        <Grid item xs={12} md={6} className="project-stripe-grid-item">
          <Earpong />
        </Grid>
      </Grid>

      <BackgroundHome />
    </>
  );
};

export default ProjectsStripe;
