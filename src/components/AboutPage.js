import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import bg from "../assets/tumblr_7696b08be336171baef4a005d1426e1a_99c98528_1280.webp";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import astronaut from "../assets/Images/spaceman.gif";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 25%;
  right: 10%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    border: blur(20px);
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box style={{ background: { bg } }}>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          Passionate web developer from India, dedicated to crafting fantastic
          websites for exceptional user experiences.
          <br></br>
          Enthusiastic about JavaScript and currently diving deep into frontend
          development. Mastering React.js and exploring possibilities with
          Next.js.
          <br></br>
          Exploring the dynamic landscape of frontend technologies brings me
          joy. My goal is to enhance skills and contribute to the ever-evolving
          web development world.
          <br></br>
          If you share the same enthusiasm, reach out through social media.
          Let's embark on this magical web development journey together!
        </Main>
        <br></br>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
