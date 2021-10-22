import React from "react";
import { Container } from "../globalStyledComponents";
import styled from "styled-components";

const Hero = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogo src='/images/logo-nopad.svg' alt='' />
          <Description>
            The greatest stories,
            <br /> all in one place.
          </Description>
          <CTAButtons>
            <CTABlock>
              <Block>
                <Price>
                  €8,99<span> | Month</span>
                </Price>
                <p>Subscription required.</p>
              </Block>
              <SignUp>Sign up now</SignUp>
            </CTABlock>
            <CTABlock>
              <Block>
                <Price>
                  €89,90<span> | Year</span>
                </Price>
                <p>Save 2 months with annual subscription**.</p>
              </Block>
              <SignUp>Save on 12 month</SignUp>
            </CTABlock>
          </CTAButtons>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Content = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  margin-right: auto;
  margin-left: 0;

  @media (max-width: 768px) {
    padding: 80px 30px;
    margin-right: auto;
    margin-left: auto;
    align-content: center;
  }

  @media (min-width: 1440px) {
    padding: 80px;
  }
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;

  @media (max-width: 768px) {
    background-image: url("/images/login-background-small.jpg");
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2vw;
  margin-left: 0;
  margin-right: auto;

  @media (max-width: 768px) {
    max-width: 680px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    margin-top: 28%;
  }
`;

const CTALogo = styled.img`
  margin-bottom: 12px;
  max-width: 380px;
  min-height: 1px;
  display: block;
  width: 75%;
  @media (max-width: 768px) {
    margin-right: auto;
    margin-left: auto;
    max-width: 200px;
  }
`;

const Description = styled.h1`
  margin: 0 0 30px;
  font-size: 36px;
  line-height: 1.2;
`;

const CTAButtons = styled.div`
  display: flex;
  align-items: stretch;
  margin: 0 -16px 24px;

  @media (max-width: 768px) {
    margin: 0 auto 20px;
    display: block;
    max-width: 340px;
    width: 100%;
  }
`;

const CTABlock = styled.div`
  max-width: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

const Block = styled.div`
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  p {
    color: #c0c0c0cc;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

const Price = styled.h3`
  margin-bottom: 8px;
  font-size: 28px;
  margin: 0;
  span {
    opacity: 0.7;
    font-size: 14px;
    display: inline;
  }
`;

const SignUp = styled.a`
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  text-transform: uppercase;

  &:hover {
    background-color: #0483ee;
  }
`;

export default Hero;
