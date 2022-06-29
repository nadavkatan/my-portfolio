import React from "react";
import StyledLetter from "../styledLetter/StyledLetter";
import "./styles/styles.css";

const ProjectSpecs = ({ letter, title, subtitle, styledText }) => {
  return (
    <div className="project-specs-container">
      <div className="title">
        <StyledLetter letter={letter} />
        <h1 className="title-letters">{title}</h1>
      </div>
      <div className="subtitle">
        <p className="subtitle-text">
          {subtitle}
          <br />
          <br />
          <em>{styledText}</em>
        </p>
      </div>
    </div>
  );
};

export default ProjectSpecs;
