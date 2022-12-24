import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import bach from "../../assets/images/bach.jpeg";
import "./styles/styles.css";

const Shilo = () => {
  return (
    <Paper className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="front-text">
            <Typography variant="h5" color="white" align="center">
              Who composed the musical masterpiece{" "}
              <em>'Das Wohltemperierte Klavier'?</em>
            </Typography>
          </div>
        </div>
        <div className="flip-card-back">
          <a
            href="https://github.com/nadavkatan/Shilo"
            target="_blank"
            rel="noreferrer"
          >
            <Typography variant="h4" color="white" align="center">
              Johann Sebastian Bach
            </Typography>
          </a>
          <a href="https://shilo.onrender.com" target="_blank" rel="noreferrer">
            <img src={bach} alt="bach avatar" className="bach-avatar" />
          </a>
        </div>
      </div>
    </Paper>
  );
};

export default Shilo;
