import { useEffect, StrictMode, useState } from "react";
import {
  convertToArr,
  multiDimensionalUnique,
  inside,
} from "../../helpers/zimHelpers";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import zim from "zimjs";

const ZimFrame = ({ handleCardRotation }) => {
  const [rotateCard, setRotateCard] = useState(false);
  useEffect(() => {
    const frame = new zim.Frame({
      scaling: "zim",
      width: 320,
      height: 480,
      color: "light",
      ready: () => {
        let dots = [];
        let latticeCords = [];
        let dotCords = { cords: [] };
        let dotsByGroup = { yellow: [], blue: [] };
        let selectedDots = [];

        function createLattice(
          Xstart,
          Ystart,
          rows,
          columns,
          step,
          color,
          latticeCords,
          dotCords
        ) {
          let initialValueX = Xstart;
          let initialValueY = Ystart;

          for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
              let circle = new zim.Circle({
                radius: 5,
                color: color,
              }).loc(Xstart, Ystart);
              dotCords.cords.push({
                x: Xstart,
                y: Ystart,
                id: circle.id,
              });
              dotsByGroup[color].push(circle.id);
              Xstart += step;
              dots.push(circle);
            }
            Xstart = initialValueX;
            Ystart += step;
          }

          latticeCords.push({
            x1: initialValueX - 10,
            x2: initialValueX + columns * step - 40,
            y1: initialValueY - 10,
            y2: initialValueY + rows * step - 30,
          });
        }

        createLattice(100, 90, 5, 5, 35, "blue", latticeCords, dotCords);

        createLattice(100, 260, 5, 5, 35, "yellow", latticeCords, dotCords);

        let shape;
        let ticker;
        let lineCords = [];

        const dampX = new zim.Damp(null, 0.1);
        const dampY = new zim.Damp(null, 0.1);
        let getUpdatingPenCords;

        const getCurrentPenCords = function () {
          lineCords.push({
            x: frame.mouseX.toFixed(),
            y: frame.mouseY.toFixed(),
          });
        };

        const countDots = (group, selectedDots) => {
          let counter = 0;
          for (let i = 0; i < group.length; i++) {
            if (selectedDots[i]) {
              if (group.includes(selectedDots[i])) counter++;
            }
          }
          return counter;
        };

        const draw = () => {
          shape = new zim.Shape().addTo();
          shape.s("pink").ss(5);

          // lineCords = [];
          dampX.immediate(frame.mouseX);
          dampY.immediate(frame.mouseY);
          shape.mt(frame.mouseX, frame.mouseY);
          getUpdatingPenCords = setInterval(getCurrentPenCords, 50);

          // instead of using mousemove event
          ticker = zim.Ticker.add(() => {
            shape.lt(dampX.convert(frame.mouseX), dampY.convert(frame.mouseY));
          });
        };

        const canvas = document.getElementById(frame.canvasID);
        canvas.addEventListener("mousedown", () => {
          draw();
        });

        canvas.addEventListener("mouseup", async () => {
          zim.Ticker.remove(ticker);

          clearInterval(getUpdatingPenCords);
          selectedDots = getSelectedPoints(dotCords, lineCords);
          const blueDots = countDots(dotsByGroup.blue, selectedDots);
          const yellowDots = countDots(dotsByGroup.yellow, selectedDots);
          if (blueDots === 0 && yellowDots === 0) {
            presentMessage();
          } else {
            openWindow(yellowDots > blueDots);
          }

          reset();
          setTimeout(() => {
            shape.removeFrom();
            frame.update();
          }, 2000);
        });

        const getSelectedPoints = (latticeDots, lineCords) => {
          let cords = convertToArr(lineCords);
          let cordsWithoutDuplicates = multiDimensionalUnique(cords);
          let selectedPoints = [];
          for (let i = 0; i < latticeDots.cords.length; i++) {
            let pointInCircle = inside(
              [latticeDots.cords[i].x, latticeDots.cords[i].y],
              cordsWithoutDuplicates
            );
            if (pointInCircle) {
              selectedPoints.push(latticeDots.cords[i].id);
            }
          }
          return selectedPoints;
        };

        const presentMessage = () => {
          handleCardRotation(true);
        };
        const openWindow = (github) => {
          const link = github
            ? "https://github.com/nadavkatan/Gestalt"
            : "https://perceptual-groupings.netlify.app/";
          setTimeout(() => {
            window.open(link, "_blank");
          }, 500);
        };

        const reset = () => {
          selectedDots = [];
          lineCords = [];
        };
      },
    });

    return () => {
      frame.dispose();
    };
  }, []);

  return null;
};

function Gestalt() {
  const [rotateCard, setRotateCard] = useState(false);

  const handleCardRotation = (bool) => {
    setRotateCard(bool);
  };

  useEffect(() => {
    if (rotateCard) {
      setTimeout(() => {
        setRotateCard(false);
      }, 2000);
    }
  }, [rotateCard]);
  return (
    <Paper className="flip-card ">
      <div
        className={
          rotateCard ? "flip-card-inner rotate-card" : "flip-card-inner"
        }
      >
        <div className="flip-card-front">
          <StrictMode>
            <div id="zim"></div>
          </StrictMode>
          <ZimFrame handleCardRotation={handleCardRotation} />
        </div>
        <div className="flip-card-back">
          <Typography variant="h5" color="white" align="center">
            You didn't select any of the dots!
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default Gestalt;
