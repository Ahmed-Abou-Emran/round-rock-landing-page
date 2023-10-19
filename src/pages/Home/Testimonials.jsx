import React from "react";
import Testimonials1 from "../../assets/Testimonials1.png";
import Star from "../../assets/star.svg";
import { HeadingWithLines } from "../../ui/Headings";
import styled from "styled-components";
const BASE_URL = "https://reqres.in/api/users";

async function getData() {
  const response = await fetch(`${BASE_URL}?page=${1}`);
  const json = await response.json();
  return json;
}

function Testimonials() {
  const testionials = [0, 1, 2, 3, 4, 5];
  const stars = [1, 2, 3, 4, 5];
  return (
    <Section>
      <HeadingWithLines>Testimonials</HeadingWithLines>
      <TestimonialsWrapper>
        {testionials.map((index) => (
          <Card key={index}>
            <img src={Testimonials1} />
            <div>
              <h3>Courtney Henry</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <StarRating>
                {stars.map((index) => {
                  return <img src={Star} key={index} />;
                })}
              </StarRating>
            </div>
          </Card>
        ))}
      </TestimonialsWrapper>
    </Section>
  );
}

const Section = styled.section`
  /* padding-inline: 22rem; */
  gap: var(--spacing-120);
  padding-inline: clamp(0.5rem, 5vw + 1rem, 22rem);
  margin-block: var(--spacing-200) var(--spacing-120);
`;
const TestimonialsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: var(--spacing-110);
  margin-block-start: var(--spacing-200);

  @media (max-width: 47rem) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.div`
  min-width: 18rem;
  width: clamp(17rem, 100%, 1fr);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-35);
  border-radius: 40px;
  padding: var(--spacing-80);
  border: 1px solid var(--blue-300);
  background: var(--grey-100);

  h3 {
    color: var(--blue-300);
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.2;
    margin-block-end: var(--spacing-30);
  }

  p {
    color: var(--blue-600);
    font-size: 0.875rem;
    font-style: normal;
    line-height: 1.6;
    margin-block-end: var(--spacing-25);
  }

  @media (max-width: 62rem) {
    flex-direction: column;
    width: 100%;
  }
`;

const StarRating = styled.div`
  display: flex;
  gap: var(--spacing-15);
`;
export default Testimonials;
