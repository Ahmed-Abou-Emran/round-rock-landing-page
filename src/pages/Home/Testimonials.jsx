import React from "react";
import Star from "../../assets/star.svg";
import RightArrow from "../../assets/rightArrow.svg";
import LeftArrow from "../../assets/leftArrow.svg";
import { HeadingWithLines } from "../../ui/Headings";
import Loader from "../../ui/Loader";
import styled from "styled-components";
import useFetch from "../../hooks/useFetch";

function Testimonials() {
  const [page, setPage] = React.useState(1);

  const handlePagination = (dir, totalPages) => {
    if ((dir === 1) & (page === totalPages)) return;
    if ((dir === -1) & (page === 1)) return;

    if (dir === 1) {
      setPage((prevPage) => prevPage + 1);
    } else {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const {
    loading,
    error,
    data: testimonials,
  } = useFetch(`https://reqres.in/api/users?page=${page}`);

  const stars = [1, 2, 3, 4, 5];
  return (
    <Section>
      <HeadingWithLines>Testimonials</HeadingWithLines>
      {loading && <Loader />}
      {!loading && error && (
        <Error>
          Something Went Wrong 😢 . Sorry We Couldn't load Testimonials
        </Error>
      )}
      {!loading && !error && (
        <>
          <TestimonialsWrapper>
            {testimonials?.data?.map(
              ({ id, first_name: firstName, last_name: lastName, avatar }) => (
                <Card key={id}>
                  <ImageWrapper>
                    <img
                      src={"https://randomuser.me/api/portraits/men/86.jpg"}
                    />
                  </ImageWrapper>
                  <div>
                    <h3>
                      {firstName} {lastName}
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                    <StarRating>
                      {stars.map((index) => {
                        return <img src={Star} key={index} />;
                      })}
                    </StarRating>
                  </div>
                </Card>
              )
            )}
          </TestimonialsWrapper>
          <Pagination>
            <button
              onClick={() => handlePagination(-1, testimonials?.total_pages)}
            >
              <img src={LeftArrow} alt="go to previous testimonials page" />
            </button>
            <div>{testimonials?.page}</div> /{" "}
            <div>{testimonials?.total_pages}</div>
            <button
              onClick={() => handlePagination(+1, testimonials?.total_pages)}
            >
              <img src={RightArrow} alt="go to next testimonials page" />
            </button>
          </Pagination>
        </>
      )}
    </Section>
  );
}

const Error = styled.div`
  color: red;
  font-size: 1.5rem;
`;
const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-block-start: 1rem;
  font-weight: 600;
  color: var(--grey-500);

  img {
    width: 3rem;
    height: 3rem;
  }

  button {
    background: none;
  }
  button:hover {
    cursor: pointer;
  }
`;

const Section = styled.section`
  /* padding-inline: 22rem; */
  /* gap: var(--spacing-120); */
  /* padding-inline: clamp(0.5rem, 5vw + 1rem, 22rem); */
  padding-inline: clamp(0.5rem, 18%, 22rem);
  margin-block: var(--spacing-200) var(--spacing-120);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
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
    h3 {
      text-align: center;
    }
    div {
      justify-content: center;
    }
  }

  @media (max-width: 62rem) {
    flex-direction: column;
    width: 100%;
  }
`;
const ImageWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 62rem) {
    margin-inline: auto;
  }
`;

const StarRating = styled.div`
  display: flex;
  gap: var(--spacing-15);
`;
export default Testimonials;
