import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Content, Wrap } from "../globalStyledComponents";
import { selectOriginal } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

export default function Originals(props) {
  const movies = useSelector(selectOriginal);
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              <Link to={"/details/" + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 26px;
`;
