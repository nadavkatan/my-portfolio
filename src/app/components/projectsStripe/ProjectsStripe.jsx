import React from 'react';
import Spyke from '../spyke/Spyke';
import Shilo from '../shilo/Shilo';
import ProjectSpecs from '../projectSpecs/ProjectSpecs';
import './styles/styles.css';

const ProjectsStripe = () => {
    const spykeSubtitle= "Spyke is a Skype clone. It contains all the basic features of skype: Connecting, live chatting and video calling other Spyke users! It also includes awesome features such as live notifications, authentication, profile customizations and more! The main technologies I used to build this app are: React, Redux, Mongoose, Nodejs & Express, Passport js, Material Ui, Socket.io, and Peer js.";
    const spykeStyled="Answer shira.paz's call on the right to view the project live, or decilne the call to check out the source code!"
    const shiloSubtitle= "Shilo is a Quizlet clone. It contains all the basic features of Quizlet: creating flashcards and organizing them in sets and folders. Users can also style their flashcard with a text editor and even add images to to the cards! The main technologies I used to build this app are: React, Mongoose, Nodejs & Express, Passport js, Material Ui, and CKeditor.";
    const shiloStyled="Click the composer's pic to view the project live, or his name to see the source code"

    return (
    <>
    <div className="project-container">
        <ProjectSpecs letter="S" title="pyke" subtitle={spykeSubtitle} styledText={spykeStyled}/>
        <Spyke/>
    </div>
        <div className="project-container">
        <Shilo/>
        <ProjectSpecs letter="S" title="hilo" subtitle={shiloSubtitle} styledText={shiloStyled}/>
    </div>
    </>
  )
}

export default ProjectsStripe