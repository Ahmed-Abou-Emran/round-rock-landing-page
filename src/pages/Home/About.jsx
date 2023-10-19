import React from "react";
import styled from "styled-components";
import AboutRight from "../../assets/about-right.svg";
import AboutLeft from "../../assets/about-left.png";
function About() {
  return (
    <Section>
      <ContentWrapper>
        <Left>
          <h2>About Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an image
          </p>
          <img src={AboutLeft} />
        </Left>
        <Right>
          <ImageWrapper>
            <img src={AboutRight} />
          </ImageWrapper>
          <h2>where</h2>
          <p>
            p Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Right>
      </ContentWrapper>
      <Button>Help Me</Button>
    </Section>
  );
}

const Section = styled.section`
  background-image: url("./src/assets/about.png");
  background-size: cover;
  width: 100%;
  /* height: 95vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-360);
  margin-block: var(--spacing-120) var(--spacing-160);
  padding-block: var(--spacing-240);
  padding-inline: var(--spacing-360);
  position: relative;
  z-index: 1;

  h2 {
    color: var(--grey-100);
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.4rem;
    margin-block-end: var(--spacing-70);
  }

  p {
    margin-block-end: var(--spacing-70);
    color: var(--grey-100);
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.3;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: var(--spacing-400);
`;

const Left = styled.div``;
const Right = styled.div`
  text-align: right;

  h2 {
    margin-block-start: var(--spacing-400);
  }
  p {
    font-weight: 600;
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 70%;
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: -1;

  img {
    height: 100%;
  }
`;
const Button = styled.button`
  z-index: 1;
  border-radius: 71px;
  background: hsla(43, 83%, 61%, 1);
  color: var(--grey-100);
  font-size: 1.5rem;
  font-weight: 700;
  padding: var(--spacing-60) var(--spacing-200);

  transition: background-color 200ms ease-in;
  &:hover {
    cursor: pointer;
    background: hsla(43, 83%, 61%, 0.8);
  }
`;
export default About;
