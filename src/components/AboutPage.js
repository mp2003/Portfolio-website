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
          I'm a passionate web developer based in India, dedicated to crafting
          fantastic websites for an exceptional user experience.
          <br></br>
          My enthusiasm for web development revolves around JavaScript, and I'm
          currently immersing myself in the captivating realm of frontend
          development. In my ongoing learning journey, I'm ardently mastering
          the intricacies of React.js and delving into the vast possibilities
          offered by Next.js.
          <br></br>
          Exploring the dynamic landscape of frontend technologies is both my
          pursuit and joy. As I navigate this exciting journey, my goal is to
          continuously enhance my skills and contribute to the ever-evolving
          world of web development.
          <br></br>
          If you share the same enthusiasm or wish to connect, feel free to
          reach out through social media channels. Let's embark on this magical
          journey of web development together!
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
