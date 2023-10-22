import React from "react";
import styled from "styled-components";
import EmailIcon from "../../assets/ic_round-mail.png";
import CallIcon from "../../assets/ic_round-call.png";
import { HeadingWithLines } from "../../ui/Headings";
import { useForm } from "react-hook-form";
const phonneRegEx =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const URL = "http://upskilling-egypt.com:3000/contact";
async function postData(url, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

function ContactUs() {
  const [isSumbmitted, setIsSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    postData(URL, data);
    reset();
    setIsSubmitted(true);
  };

  return (
    <Section>
      <HeadingWithLines flexGap="1rem">Contact Us</HeadingWithLines>
      <ContentWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "This field is required",
                maxLength: 80,
              })}
            />
            {errors?.name && <Error> {errors?.name?.message}</Error>}
          </InputWrapper>
          <InputWrapper>
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "This field is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid Eamil" },
              })}
            />
            {errors?.email && <Error> {errors?.email?.message}</Error>}
          </InputWrapper>
          <InputWrapper>
            <input
              {...register("phone", {
                required: "This field is required",
                pattern: {
                  value: phonneRegEx,
                  message: "Invalid phone number",
                },
              })}
              type="tel"
              placeholder="Phone"
            />
            {errors?.phone && <Error> {errors?.phone?.message}</Error>}
          </InputWrapper>
          <button type="submit">Send</button>
          {isSumbmitted && (
            <SubmitMessage>Message Sent Successfully !</SubmitMessage>
          )}
        </Form>
        <ContactDetails>
          <ContactItem>
            <img src={EmailIcon} />
            <span>upskilling.eg1@gmail.com</span>
          </ContactItem>
          <ContactItem>
            <img src={CallIcon} />
            <span>+20 115 493 2137</span>
          </ContactItem>
        </ContactDetails>
      </ContentWrapper>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: clamp(0.5rem, 5vw + 1rem, 22rem);
  gap: var(--spacing-120);
`;
const ContentWrapper = styled.div`
  display: flex;
  /* flex-direction: row-reverse; */
  align-items: flex-start;
  justify-content: center;
  gap: var(--spacing-240);

  @media (max-width: 50rem) {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
    gap: var(--spacing-80);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-35);
  color: var(--grey-900);
  flex: 1;

  input {
    color: inherit;
    font-family: Inter;
    border-radius: 61px;
    width: 24rem;
    padding-inline: 2rem;
    padding-block: 1.25rem;
    background-color: var(--blue-000);

    @media (max-width: 50rem) {
      width: 100%;
    }
  }
  button {
    color: inherit;
    font-family: Inter;
    background-color: var(--grey-100);
    border-radius: 61px;
    border: 3px solid var(--blue-200);
    align-self: center;
    width: 10rem;
    padding-block: 1rem;
    transition: all 300ms ease-in;

    &:hover {
      cursor: pointer;
      background-color: var(--blue-200);
      color: var(--grey-100);
    }
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;
const Error = styled.span`
  position: absolute;
  right: 2rem;
  bottom: 50%;
  color: red;
  font-size: 12px;
  transform: translateY(50%);
`;
const SubmitMessage = styled.div`
  background: #3b7a57;
  color: var(--grey-100);
  padding: var(--spacing-40) var(--spacing-80);
  border-radius: 5px;
  position: relative;
  text-align: center;
`;
const ContactDetails = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-100);
  margin-block-end: var(--spacing-200);
  @media (max-width: 50rem) {
    justify-content: center;
    margin-block-start: var(--spacing-160);
    margin-block-end: 0;
  }
`;

const ContactItem = styled.div`
  display: flex;
  gap: var(--spacing-50);
`;
export default ContactUs;
