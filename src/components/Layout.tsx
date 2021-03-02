import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import Head from "./Head";
// Styles
import theme from "../styles/theme";
import GlobalStyles, { YellowAccent } from "../styles/globals";

const PageStyles = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;

  header {
    display: flex;
    border-bottom: 2px solid rgba(254, 60, 161, 0.3);
    padding: 1.5rem 2.5rem;

    h1 {
      font-family: "Source Code Pro";
      font-weight: 900;
    }
  }

  aside {
    border-right: 2px solid rgba(254, 60, 161, 0.3);
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: "DotGothic16";

    nav {
      padding: 3rem 0;
    }

    li {
      padding: 1rem 0;
    }
    li:first-child {
      padding-top: 0;
    }
    li:last-child {
      padding-bottom: 0;
    }
  }

  section {
    flex: 1;
    display: flex;
  }

  main {
    padding: 3rem 5rem;
    flex: 1;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <GlobalStyles />
      <PageStyles>
        <header>
          <h1>
            👨‍💻 dolden<YellowAccent>.</YellowAccent>dev
          </h1>
        </header>
        <section>
          <aside>
            <nav>
              <ul>
                <li>
                  <Link to="/">
                    home<YellowAccent>()</YellowAccent>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    about<YellowAccent>()</YellowAccent>
                  </Link>
                </li>
                <li>
                  <Link to="/work">
                    work<YellowAccent>()</YellowAccent>
                  </Link>
                </li>
                <li>
                  <Link to="/writing">
                    writing<YellowAccent>()</YellowAccent>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main>{children}</main>
        </section>
      </PageStyles>
    </>
  );
};

export default Layout;
