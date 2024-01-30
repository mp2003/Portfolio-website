import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Blogs } from "../data/BlogData";
import BlogComponent from "./BlogComponent";
import AnchorComponent from "../subComponents/Anchor";
import BigTitle from "../subComponents/BigTitlte";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: fill;
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: bottom;
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.4)`};
  width: 100%;
  height: auto;

  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;
const Grid = styled.div`
  display: grid;
  grid-gap: calc(1rem + 2vw);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(calc(14rem + 15vw), 1fr));
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  }
`;

// Framer-motion config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={numbers} />
        <Center>
          <Grid>
            {Blogs.map((blog) => {
              return <BlogComponent key={blog.id} blog={blog} />;
            })}
          </Grid>
        </Center>
        <BigTitle text="PROJECT" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
