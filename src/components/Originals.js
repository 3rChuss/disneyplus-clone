import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Content, Wrap } from "../globalStyledComponents";

export default function Originals(props) {
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        <Wrap>
          <Link to='/'>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg' />
          </Link>
        </Wrap>
        <Wrap>
          <Link to='/'>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg' />
          </Link>
        </Wrap>
        <Wrap>
          <Link to='/'>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg' />
          </Link>
        </Wrap>
        <Wrap>
          <Link to='/'>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg' />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 26px;
`;
