import * as React from "react";
import styled from "styled-components";
import Head from "./Head";
// Styles
import GlobalStyles from "../styles/globals";
import Header from "./Header";

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;

  main {
    padding: 0 15%;
    flex: 1;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <GlobalStyles />
      <Head />
      <PageWrapper>
        <Header />
        <main>{props.children}</main>
      </PageWrapper>
    </>
  );
};

export default Layout;
