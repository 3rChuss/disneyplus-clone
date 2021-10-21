import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../middleware/firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, getDocs } from "@firebase/firestore";

import styled from "styled-components";
import ImgSlider from "../components/Imgslider";
import NewDisney from "../components/NewDisney";
import Originals from "../components/Originals";
import Recommends from "../components/Recommends";
import Trendings from "../components/Trendings";
import Viewer from "../components/Viewer";

const HomePage = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommend = [];
  let newDisney = [];
  let original = [];
  let trending = [];

  useEffect(() => {
    try {
      const data = getDocs(collection(db, "movies"));
      data.then((movies) => {
        movies.forEach((movie) => {
          switch (movie.data().type.toLowerCase()) {
            case "recommend":
              recommend.push({ id: movie.id, ...movie.data() });
              break;
            case "new":
              newDisney.push({ id: movie.id, ...movie.data() });
              break;
            case "original":
              original.push({ id: movie.id, ...movie.data() });
              break;
            case "trending":
              trending.push({ id: movie.id, ...movie.data() });
              break;
          }
        });
        dispatch(
          setMovies({
            recommend,
            newDisney,
            original,
            trending,
          }),
        );
      });
    } catch (error) {
      console.error(error);
    }
  }, [userName]);

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
