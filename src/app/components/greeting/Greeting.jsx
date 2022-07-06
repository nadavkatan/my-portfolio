import React from "react";
import StyledLetter from "../styledLetter/StyledLetter";
import { useMediaQuery } from "@mui/material";
import "./styles/styles.css";

const Greeting = () => {
  const headerText = ["Nadav ", "Katan"];
  const headerText2 = ["Fullstack ", "web ", "developer"];

  const isSmallScreen = useMediaQuery(theme=>theme.breakpoints.down("md"));

  return (
    <div className="wrapper">
      <div className="header-text-container">
        <div className="header-text">
          {headerText.map((word, i) => {
            return (
              <div key={i} className="greeting-word">
                {word.split("").map((letter, i) => {
                  if (letter === " ")
                    return <span key={i} style={{ width: "1em" }} />;
                  if (letter === "N")
                    return <StyledLetter key={i} letter="N" transform={-50} />;
                  return (
                    <h1 key={i} className={isSmallScreen? "sm-screen-header-letter": "header-letter"}>
                      {letter}
                    </h1>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="header-text">
          {headerText2.map((word, i) => {
            return (
              <div key={i} className="greeting-word">
                {word.split("").map((letter, i) => {
                  if (letter === " ")
                    return <span key={i} style={{ width: "1em" }} />;
                  return (
                    <h1 key={i} className={isSmallScreen? "sm-screen-header-letter": "header-letter"}>
                      {letter}
                    </h1>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Greeting;
