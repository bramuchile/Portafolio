import AboutDescription from "../components/AboutMe/AboutDescription";
import WhatIDo from "../components/AboutMe/WhatIDo";
import Skills from "../components/AboutMe/Skills";
import { Container } from "@mui/material";

const AboutMe = () => {
  return (
    <Container sx={{mt:2,mb:4}}>
      <AboutDescription />
      <WhatIDo />
      <Skills />
    </Container>
  );
};

export default AboutMe;