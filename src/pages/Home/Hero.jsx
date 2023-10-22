import React from "react";
import HeroImage from "../../assets/HeroStyled.png";
import styled from "styled-components";
import logo from "../../assets/logo.png";
function Hero() {
  return (
    <Header>
      <ImageWrapper>
        <img src={HeroImage} />
      </ImageWrapper>
      <LogoWrapper>
        <img src={logo} />
        <LogoTextWrapper>
          Round Rock
          <span>Trush Hauling</span>
        </LogoTextWrapper>
      </LogoWrapper>
      <ContentWrapper>
        <Button
          style={{
            fontWeight: 500,
            padding: "var(--spacing-20) var(--spacing-90)",
            borderRadius: "20px",
            backgroundColor: "var(--blue-300)",
          }}
        >
          Experts
        </Button>
        <TextWrapper>
          lorem <span>lorem lorem</span>
        </TextWrapper>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
        <Button>Help Me</Button>
      </ContentWrapper>
    </Header>
  );
}

const Header = styled.header`
  padding-block-end: var(--spacing-200);
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  position: relative;
  gap: var(--spacing-280);
  width: 100%;
  @media (max-width: 80rem) {
    background-image: url("./src/assets/Hero.jpg");
    background-repeat: no-repeat;
    background-size: auto auto;
    background-position: top center;
    gap: var(--spacing-240);
    padding-inline: 1rem;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  img {
    flex-shrink: 0;
    object-fit: cover;
    object-position: center;

    @media (max-width: 80rem) {
      display: none;
    }
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-block-start: var(--spacing-200);
  /* margin-inline: 0.5rem; */
  @media (max-width: 46rem) {
    flex-direction: column;
    gap: 5px;
  }
`;

const LogoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--blue-300);
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;

  span {
    font-size: 1.3rem;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: 16px;
  }

  @media (max-width: 46rem) {
    font-size: 3rem;
    span {
      font-size: 1rem;
      letter-spacing: 12px;
    }
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 44rem;
  color: var(--grey-700);
  gap: var(--spacing-50);
  margin-inline: auto;

  p {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: var(--spacing-50);
    max-width: 34rem;
  }

  @media (max-width: 30rem) {
    p {
      font-size: 0.9rem;
    }
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 6rem;
  font-style: normal;
  font-weight: 100;
  line-height: 0.95;

  margin-bottom: var(--spacing-50);

  span {
    font-weight: 900;
  }

  @media (max-width: 44rem) {
    font-size: 3rem;
  }
`;

const Button = styled.button`
  border-radius: 71px;
  background: var(--blue-100);
  color: var(--grey-100);
  font-size: 1.5rem;
  font-weight: 700;
  padding: var(--spacing-60) var(--spacing-200);
  margin-block-end: var(--spacing-80);
  transition: background-color 200ms ease-in;
  &:hover {
    cursor: pointer;
    background-color: var(--blue-300);
  }
  @media (max-width: 46rem) {
    font-size: 1.2rem;
    padding: var(--spacing-40) var(--spacing-160);
  }
`;

export default Hero;
