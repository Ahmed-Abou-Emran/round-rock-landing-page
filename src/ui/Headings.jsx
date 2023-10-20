import styled from "styled-components";

import Line1 from "../assets/Line1.png";
import Line2 from "../assets/Line2.png";
import Line4 from "../assets/Line4.png";

export const HeadingWithLines = ({ children, flexGap }) => {
  return (
    // <HeadingWrapper style={{ gap: flexGap ? flexGap : "0" }}>
    <HeadingWrapper>
      <LinesWrapper>
        <img src={Line2} />
        <img src={Line4} />
      </LinesWrapper>

      <Heading2>{children}</Heading2>
      <LinesWrapper>
        <img src={Line1} />
        <img src={Line2}></img>
      </LinesWrapper>
    </HeadingWrapper>
  );
};

const HeadingWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 1rem;
  width: max-content;
  margin-inline: auto;
  gap: ${(props) => props.flexGap};

  @media (max-width: 25rem) {
    padding: 0.5rem;
  }
`;

const Heading2 = styled.div`
  color: var(--blue-300);
  text-align: center;
  font-size: clamp(1.5rem, calc(2vw + 1rem), 4rem);
  font-weight: 900;
  line-height: 1.4;
  margin-inline: 0.1rem;
`;

const LinesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;
