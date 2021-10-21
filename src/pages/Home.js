import React from "react";
import styled from "styled-components";
import ImgSlider from "../components/Imgslider";
import NewDisney from "../components/NewDisney";
import Originals from "../components/Originals";
import Recommends from "../components/Recommends";
import Trendings from "../components/Trendings";
import Viewer from "../components/Viewer";
import file from "../disneyPlusMoviesData.json";
import db from "../middleware/firebase";
import { collection, addDoc } from "firebase/firestore";

const HomePage = () => {
  // Object.entries(file.movies).forEach(async (movie) => {
  //   await addDoc(collection(db, "movies"), {
  //     backgrounImg: movie[1].backgroundImg,
  //     cardImg: movie[1].cardImg,
  //     description: movie[1].description,
  //     subtitle: movie[1].subTitle,
  //     title: movie[1].title,
  //     titleImg: movie[1].titleImg,
  //     type: movie[1].type,
  //   });
  // });

  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trendings />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default HomePage;
