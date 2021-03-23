import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--blue-light);

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const date = new Date();
  return (
    <FooterStyles>
      <div>&copy; {date.getFullYear()}. Paul Dolden. All rights reserved.</div>
      <div>
        Made with 💙 by&nbsp;<a href="https://dolden.dev">Paul Dolden</a>
      </div>
    </FooterStyles>
  );
};
