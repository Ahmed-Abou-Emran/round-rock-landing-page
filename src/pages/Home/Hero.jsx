import React from "react";
import HeroImage from "../../assets/HeroStyled.png";
import styled from "styled-components";
import logo from "../../assets/logo.png";
function Hero() {
  return (
    <Header>
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
  /* height: 90vh; */
  /* linear-gradient(
      to right top,
      hsla(203, 83%, 81%, 0.7),
      hsla(43, 83%, 91%, 0.4)
    ), */
  padding-block: var(--spacing-200);
  background-image: url("./src/assets/HeroStyled.png");
  background-repeat: no-repeat;
  background-position: contain;
  background-size: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-360);
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
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
`;

const Button = styled.button`
  border-radius: 71px;
  background: var(--blue-100);
  color: var(--grey-100);
  font-size: 1.5rem;
  font-weight: 700;
  padding: var(--spacing-60) var(--spacing-200);

  transition: background-color 200ms ease-in;
  &:hover {
    cursor: pointer;
    background-color: var(--blue-300);
  }
`;

export default Hero;
