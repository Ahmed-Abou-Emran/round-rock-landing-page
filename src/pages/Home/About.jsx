import React from "react";
import styled from "styled-components";
import AboutRight from "../../assets/about-right.svg";
import AboutLeft from "../../assets/about-left.png";
function About() {
  return (
    <Section>
      <ImageWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1259"
          height="840"
          viewBox="0 0 1259 840"
          fill="none"
        >
          <path
            d="M558.598 0.0959473H1259V840H0L443.36 71.6682C443.36 71.6682 466.775 32.8108 488.594 16.6126C514.043 -2.28033 558.598 0.0959473 558.598 0.0959473Z"
            fill="#6D91EE"
          />
        </svg>
      </ImageWrapper>
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
  height: 52.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-160);
  margin-block: var(--spacing-120) var(--spacing-160);
  padding-block: var(--spacing-240);
  /* padding-inline: clamp(0.5rem, 5vw + 1rem, 22rem); */
  padding-inline: clamp(0.5rem, 10%, 22rem);
  position: relative;
  z-index: 1;

  h2 {
    color: var(--grey-100);
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.4;
    margin-block-end: var(--spacing-70);
  }

  p {
    margin-block-end: var(--spacing-70);
    color: var(--grey-100);
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.3;
    max-width: 31rem;
  }
  @media (max-width: 90rem) {
    height: revert;
    gap: var(--spacing-80);
    h2 {
      margin-block-end: var(--spacing-30);
    }

    img {
      width: 100%;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: var(--spacing-800);
  @media (max-width: 93rem) {
    flex-direction: column;
    gap: var(--spacing-80);
  }
`;

const Left = styled.div``;
const Right = styled.div`
  text-align: right;

  h2 {
    margin-block-start: var(--spacing-400);
    @media (max-width: 93rem) {
      margin-block: var(--spacing-100) var(--spacing-80);
    }
  }
  p {
    font-weight: 600;
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  svg {
    object-fit: cover;
    object-position: top left;
  }

  @media (max-width: 93rem) {
    display: none;
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
