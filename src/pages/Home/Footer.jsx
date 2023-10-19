import React from "react";
import styled from "styled-components";
function Footer() {
  return <StyledFooter></StyledFooter>;
}

const StyledFooter = styled.footer`
  height: 9rem;
  width: 100%;
  background-color: var(--blue-700);
  margin-block-start: var(--spacing-130);
`;
export default Footer;
