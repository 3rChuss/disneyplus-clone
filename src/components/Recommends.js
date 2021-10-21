import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Content, Wrap } from "../globalStyledComponents";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";

export default function Recommends(props) {
  const movies = useSelector(selectRecommend);
  return (
    <Container>
      <h4>Recommended for you</h4>
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
