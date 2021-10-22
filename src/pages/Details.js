import { doc, getDoc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import db from "../middleware/firebase";

export default function Details(props) {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    backgroundImg: "",
    cardImg: "",
    description: "",
    subTitle: "",
    title: "",
    titleImg: "",
    type: "",
  });

  useEffect(() => {
    getMovie(id).then((movieData) => {
      if (movieData == null) return;
      setMovie({ ...movieData });
    });
  }, [id]);

  const getMovie = async (movieId) => {
    const movieRef = doc(db, "movies", movieId);
    const movieSnap = await getDoc(movieRef);
    return movieSnap.exists() ? movieSnap.data() : false;
  };

  return (
    <Container>
      <Background>
        <img alt={movie.titleImg} src={movie.backgroundImg} />;
      </Background>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5w + 5px);
`;

const Background = styled.div`
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
