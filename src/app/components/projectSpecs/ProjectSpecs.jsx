import React from 'react';
import StyledLetter from '../styledLetter/StyledLetter';
import './styles/styles.css';

const ProjectSpecs = () => {
  return (
    <div className="project-specs-container">
        <div className="title">
        <StyledLetter letter="S"/>
        <h1 className="title-letters">pyke</h1>
        </div>
        <div className="subtitle">
            <p className="subtitle-text">
                Spyke is a Skype clone. It contains all the basic features of skype: <br/>
                Connecting, live chatting and video calling other Spyke users! <br/>
                It also includes awesome features such as live notifications, authentication, profile customizations and more! <br/>
                The main technologies I used to build this app are: React, Redux, Mongoose, Nodejs & Express, Passport js, Material Ui, Socket.io, and Peer js. <br/><br/>
                <em>Answer shira.paz's call on the right to view the project live, or decilne the call to check out the source code! </em>
            </p>
        </div>
    </div>
  )
}

export default ProjectSpecs