import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectNewDisney } from "../features/movie/movieSlice";
import { Content, Wrap } from "../globalStyledComponents";

export default function NewDisney(props) {
  const movies = useSelector(selectNewDisney);
  return (
    <Container>
      <h4>New to Disney+</h4>
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
