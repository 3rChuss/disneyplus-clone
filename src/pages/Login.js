import React, { useEffect } from "react";
import { Container } from "../globalStyledComponents";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../middleware/firebase";
import {
  selectUserName,
  setUserLoginDetails,
} from "../features/user/userSlice";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.replace("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
      }),
    );
  };

  return (
    <Container>
      <Content>
        <Logo href='/'>
          <img src='/images/logo.svg' alt='logo' />
        </Logo>
        <Description>
          <h3>Log in with your email</h3>
        </Description>
        <EmailInput placeholder='Email' />
        <Button>Continue</Button>
        <Button onClick={handleAuth}>Login with Google</Button>
      </Content>
    </Container>
  );
};

const Content = styled.section`
  margin-top: 40px !important;
  max-width: 380px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const Logo = styled.a`
  max-width: 172px;
  padding: 0;
  width: 100%;
  margin-top: 36px auto 0px;
  max-height: 70px;
  font-size: 0;

  img {
    display: block;
    width: 100%;
  }
`;

const Description = styled.div`
  width: 100%;
  margin-top: 30px;

  h3 {
    font-size: 24px;
  }
`;

const EmailInput = styled.input`
  backdrop-filter: blur(50px);
  background-color: rgb(49, 52, 62);
  border: 1px solid transparent;
  border-radius: 4px;
  caret-color: rgb(2, 231, 245);
  height: 48px;
  outline: none;
  padding: 7px 12px;
  transition: all 0.1s ease 0s;
  width: 100%;
`;

const Button = styled.a`
  color: #f9f9f9;
  background-color: #0063e5;
  margin-top: 1.5rem;
  width: 100%;
  letter-spacing: 1.1px;
  font-size: 18px;
  padding: 12px 0;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  text-transform: uppercase;

  &:hover {
    background-color: #0483ee;
  }
`;

export default LoginPage;
