import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import bach from "../../assets/images/bach.jpeg";
import "./styles/styles.css";

const Shilo = () => {
  return (
    <Paper class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div className="front-text">
            <Typography variant="h5" color="white" align="center">
              Who composed the musical masterpiece 'Das Wohltemperierte
              Klavier'?
            </Typography>
          </div>
        </div>
        <div class="flip-card-back">
          <a
            href="https://github.com/nadavkatan/Shilo"
            target="_blank"
            rel="noreferrer"
          >
            <Typography variant="h4" color="white" align="center">
              Johan Sebastian Bach
            </Typography>
          </a>
          <a
            href="https://shilo-app.herokuapp.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bach} alt="bach avatar" className="bach-avatar" />
          </a>
        </div>
      </div>
    </Paper>
  );
};

export default Shilo;
