import React from "react";
import StyledLetter from "../styledLetter/StyledLetter";
import "./styles/styles.css";

const Greeting = () => {
  const headerText = "Nadav Katan";
  const headerText2 = "Fullstack web developer";

  return (
    <div className="wrapper">
    <div className="header-text-container">
    <div className="header-text">
        {headerText.split("").map((letter, i) => {
          if (letter === " ") return <span key={i} style={{ width: "1em" }} />;
          if (letter === "N") return <StyledLetter key={i} letter="N" />;
          return (
            <h1 key={i} className="header-letter">
              {letter}
            </h1>
          );
        })}
      </div>
      <div className="header-text">
        {headerText2.split("").map((letter, i) => {
          if (letter === " ") return <span key={i} style={{ width: "1em" }} />;
          return (
            <h1 key={i} className="header-letter">
              {letter}
            </h1>
          );
        })}
      </div>
    </div>

    </div>
  );
};

export default Greeting;
