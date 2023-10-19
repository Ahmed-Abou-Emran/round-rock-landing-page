import React from "react";
import styled from "styled-components";
import Service1 from "../../assets/Services1.png";
import Service2 from "../../assets/Services2.png";
import Service3 from "../../assets/Services3.png";
import { HeadingWithLines } from "../../ui/Headings";
function Services() {
  return (
    <Section>
      <HeadingWithLines>Services</HeadingWithLines>
      <ContentWrapper>
        <Card>
          <img src={Service1} />
          <TextWrapper>
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled
            </p>
          </TextWrapper>
        </Card>

        <Card>
          <img src={Service2} />
          <TextWrapper>
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled
            </p>
          </TextWrapper>
        </Card>
        <Card>
          <img src={Service3} />
          <TextWrapper>
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled
            </p>
          </TextWrapper>
        </Card>
      </ContentWrapper>
      <Button>Help Me</Button>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-120);
  gap: var(--spacing-120);
  padding-inline: clamp(0.5rem, 5vw + 1rem, 22rem);
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: var(--spacing-60);
  margin-inline: auto;
`;

const Card = styled.div`
  border-radius: 30px;
  background: var(--grey-100);
  box-shadow: 0px 10px 30px 0px rgba(16, 51, 30, 0.1);
  color: var(--blue-500);

  h3 {
    margin-block-end: var(--spacing-25);
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.5;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.4;
  }
  img {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  padding: var(--spacing-70);
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

export default Services;
