import React from "react";
import styled, { keyframes } from "styled-components";
import { DarkTheme } from "../components/Themes";

const slideInLeftAnimation = keyframes`
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2.25rem;
  z-index: 3;

  animation: ${slideInLeftAnimation} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    0.2s both;
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>MP</Logo>;
};

export default LogoComponent;
