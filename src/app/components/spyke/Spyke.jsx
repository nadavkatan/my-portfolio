import React from "react";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import CallIcon from "@mui/icons-material/Call";
import CallEndIcon from "@mui/icons-material/CallEnd";
import shira from "../../assets/images/shira.JPG";
import "./styles/styles.css";
import { Fab } from "@mui/material";

const Spyke = () => {
  return (
    <Paper elevation={3} className="project-card">
      <Avatar src={shira} sx={{ width: 150, height: 150 }} />
      <div className="user-calling">
        <h4 className="username">shira.paz</h4>
        <h4 className="incoming-call-text">Incoming call...</h4>
      </div>

      <div className="incoming-call-btns-container">
        <a
          href="https://github.com/nadavkatan/Skype"
          target="_blank"
          rel="noreferrer"
        >
          <Fab size="small" color="error">
            <CallEndIcon />
          </Fab>
        </a>
        <a
          href="https://my-skype-clone.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Fab size="small" color="success">
            <CallIcon />
          </Fab>
        </a>
      </div>
    </Paper>
  );
};

export default Spyke;
