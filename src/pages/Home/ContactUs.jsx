import React from "react";
import styled from "styled-components";
import EmailIcon from "../../assets/ic_round-mail.png";
import CallIcon from "../../assets/ic_round-call.png";
import { HeadingWithLines } from "../../ui/Headings";
function ContactUs() {
  return (
    <Section>
      <HeadingWithLines flexGap="2rem">Contact Us</HeadingWithLines>
      <ContentWrapper>
        <Form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <button type="submit">Send</button>
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
  }
`;

const ContactDetails = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-100);

  @media (max-width: 50rem) {
    justify-content: center;
    margin-block-start: var(--spacing-160);
    /* align-items: center; */
  }
`;

const ContactItem = styled.div`
  display: flex;
  gap: var(--spacing-50);
`;
export default ContactUs;
