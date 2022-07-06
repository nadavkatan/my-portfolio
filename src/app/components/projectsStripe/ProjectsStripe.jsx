import React from "react";
import Spyke from "../spyke/Spyke";
import Shilo from "../shilo/Shilo";
import Earpong from "../earpong/Earpong";
import ProjectSpecs from "../projectSpecs/ProjectSpecs";
import BackgroundHome from "../backgroundHome/BackgroundHome";
import "./styles/styles.css";
import { Grid, useMediaQuery } from "@mui/material";

const ProjectsStripe = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const spykeSubtitle =
    "Spyke is a Skype clone. It contains all the basic features of skype: Connecting, live chatting and video calling other Spyke users! It also includes awesome features such as live notifications, authentication, profile customizations and more! The main technologies I used to build this app are: React, Redux, Mongoose, Nodejs & Express, Passport js, Material Ui, Socket.io, and Peer js.";
  const spykeStyled =
    "Answer shira.paz's call on the right to view the project live, or decilne the call to check out the source code!";
  const shiloSubtitle =
    "Shilo is a Quizlet clone. It contains all the basic features of Quizlet: creating flashcards and organizing them in sets and folders. Users can also style their flashcard with a text editor and even add images to to the cards! The main technologies I used to build this app are: React, Mongoose, Nodejs & Express, Passport js, Material Ui, and CKeditor.";
  const shiloStyled =
    "Click the composer's pic to view the project live, or his name to see the source code";
  const earpongSubtitle =
    "Earpong! is an ear-training app for users to practice their relative pitch recognition. The app generates random sounds for the user to try and recognize. It is based on a famous ear-training exercise used in music colleges. Earpong! is a rather simple React app, one of the first ones that I have developed, but I love it! It was built with React, Materia Ui, and Tone.js";
  const earpongStyled =
    "Click the 'Play sound' button, listen carefully and try to recognize whether the played sound is 'C' or 'G'. Submit your answer by clicking the corresponding sound button. If you're correct, you will be redirected to the live project, if you're wrong, to the source code.";

  return (
    <>
      <Grid
        container
        spacing={3}
        className={
          isSmallScreen ? "sm-screen-project-container" : "project-container"
        }
      >
        <Grid item xs={12} md={6} className="project-stripe-grid-item">
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
          isSmallScreen ? "sm-screen-project-container" : "project-container"
        }
      >
        {!isSmallScreen && (
          <Grid item xs={12} md={6} className="project-stripe-grid-item">
            <Shilo />
          </Grid>
        )}

        <Grid item xs={12} md={6} className="project-stripe-grid-item">
          <ProjectSpecs
            letter="S"
            title="hilo"
            transform={-43}
            subtitle={shiloSubtitle}
            styledText={shiloStyled}
          />
        </Grid>
        {isSmallScreen && (
          <Grid item xs={12} md={6} className="project-stripe-grid-item">
            <Shilo />
          </Grid>
        )}
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
            pecs
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

      {/* <BackgroundHome /> */}
    </>
  );
};

export default ProjectsStripe;
