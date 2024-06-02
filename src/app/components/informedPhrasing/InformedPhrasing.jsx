import React from "react";
import "./styles/styles.css";
import Book from "../book/Book";
import dissertationLogo from "../../assets/images/dissertation-logo.png";

const InformedPhrasing = () => {
  const pages = [
    {
      title: "Informed Phrasing",
      content: "",
      link: "https://informed-phrasing.netlify.app/",
      img: dissertationLogo,
    },
    {
      title: "Introduction: The Master and the Apprentice",
      content: `<i>Informed Phrasing</i>, a somewhat ambiguous title for a research project...`,
      link: "https://informed-phrasing.netlify.app/chapter/introduction",
      img: "",
    },
    {
      title: "Chapter 1: The Art of Phrasing",
      content: `To speak, sing, shout, whisper, and cry through the tip of the fingers: that is the instrumentalist's main vocation and satisfaction...`,
      link: "https://informed-phrasing.netlify.app/chapter/1",
      img: "",
    },
    {
      title:
        "Chapter 2: The Relationship Between Music Analysis and Performance",
      content: `The notion of “Experimental systems” was first formulated by Hans Jörg Rheinberger...`,
      link: "https://informed-phrasing.netlify.app/chapter/2",
      img: "",
    },
    {
      title: "Chapter 3: The Art of Phrasing",
      content: `The analysis-practice relationship emerged as a subdiscipline within music theory during the 20th century with the publication of <i>Musical Structure and Performance</i>`,
      link: "https://informed-phrasing.netlify.app/chapter/3",
      img: "",
    },
    {
      title: "Chapter 4: Schenekrian Analysis and Tonal Motion",
      content: `<i>“Even the nose may assist, as long as the proper meaning is conveyed"</i>`,
      link: "https://informed-phrasing.netlify.app/chapter/4",
      img: "",
    },

    {
      title: "Chapter 5: Cognitive Groupings in Gestalt Psychology",
      content:
        "Conceived as an experimental endeavour, this chapter seeks to explore alternative modes of knowledge communication and dissemination within the field of artistic research...",
      link: "https://informed-phrasing.netlify.app/chapter/5",
      img: "",
    },
    {
      title: "Chapter 6: The Motorically Imposed Perceptual Groupings",
      content:
        "The classical perceptual grouping principles mentioned above are founded upon the assertion that human perception is an exclusively mental function...",
      link: "https://informed-phrasing.netlify.app/chapter/6",
      img: "",
    },
    {
      title: "Chapter 7: Creative Interaction Through Generative Improvisation",
      content:
        "Thus, improvisation is the medium that allows performers to both internalize and spontaneously react to their analytical statements..",
      link: "https://informed-phrasing.netlify.app/chapter/7",
      img: "",
    },
    {
      title: "Chapter 8: The Performative Deep Structural Analysis",
      content:
        "The fundamental premise allowing for analytical interaction is that musical scores are inherently ambiguous...",
      link: "https://informed-phrasing.netlify.app/chapter/8",
      img: "",
    },
    {
      title: "Chapter 9: Case Studies: The Informed Phrasing Elective Course",
      content:
        "Artistic research is a rather elusive research paradigm, with perceptions of what qualifies as artistic research as well as expectations regarding its essential components and methodologies varying among different academic institutions...",
      link: "https://informed-phrasing.netlify.app/chapter/9",
      img: "",
    },
    {
      title: "Conclusion",
      content:
        "The primary objective of this project, as outlined in the introduction, is to search for a more creative approach to tonal music performance and education...",
      link: "https://informed-phrasing.netlify.app/chapter/conclusion",
      img: "",
    },
  ];

  return <Book pages={pages} />;
};

export default InformedPhrasing;
