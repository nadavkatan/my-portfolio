import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import angryAvatar from "../../assets/images/angry.png";
import neutralAvatar from "../../assets/images/neutral.png";
import c from "../../assets/sounds/c.mp3";
import g from "../../assets/sounds/g.mp3";
import "./styles/styles.css";

const Earpong = () => {
  const [correct, setCorrect] = useState(undefined);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const audioEl = useRef();

  const playSound = () => {
    setSoundPlayed(true);
    if (audioEl.current) {
      audioEl.current.src = c;
      audioEl.current.play();
    }
  };

  const handleAnswer = (sound) => {
    if (soundPlayed && sound === "c") {
      audioEl.current.src = c;
      audioEl.current.play();
      setCorrect(true);
    }
    if (soundPlayed && sound === "g") {
      audioEl.current.src = g;
      audioEl.current.play();
      setCorrect(false);
    }
    setAnswerSubmitted(true);
  };

  const reset = () => {
    setCorrect(undefined);
    setAnswerSubmitted(false);
    setSoundPlayed(false);
  };

  useEffect(() => {
    // console.log()
    if (answerSubmitted && correct) {
      setTimeout(() => {
        window.open("https://nadavkatan.github.io/earpong/", "_blank");
        reset();
      }, 2000);
    }
    if (answerSubmitted && !correct) {
      setTimeout(() => {
        window.open("https://github.com/nadavkatan/earpong", "_blank");
        reset();
      }, 2000);
    }
  }, [answerSubmitted]);

  return (
    <>
      <Paper className="earpong-container">
        <div className="earpong-card-content">
          <div className="sound-btns">
            <Button
              variant="contained"
              name="c"
              className="earpong-btns"
              onClick={() => handleAnswer("c")}
            >
              C
            </Button>
            <Button
              variant="contained"
              name="g"
              className="earpong-btns"
              onClick={() => handleAnswer("g")}
            >
              G
            </Button>
          </div>
          <div className="earpong-avatar-container">
            <Button
              variant="contained"
              color="warning"
              className="earpong-btns"
              onClick={playSound}
            >
              Play sound
            </Button>
            <img
              src={
                correct || correct === undefined ? neutralAvatar : angryAvatar
              }
              alt="teacher-avatar"
              className="earpong-avatar"
            />
          </div>
          <audio src={c} ref={audioEl}></audio>
        </div>
      </Paper>
    </>
  );
};

export default Earpong;
