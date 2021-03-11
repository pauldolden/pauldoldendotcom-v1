import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { flexCenter } from "../styles/globals";
import ThemeSwitcher from "./ThemeSwitcher";

const PageStyles = styled.section`
  header {
    ${flexCenter};
    justify-content: space-between;
    border-bottom: 1px solid var(--pink-base);
    padding: 3rem 15%;
    color: var(--pink-base);

    h1 {
      font-family: "Anaheim";
      font-weight: 700;
      font-size: 4rem;
    }
    nav {
      ${flexCenter};
      font-family: "Source Code Pro";

      ul {
        display: flex;

        li {
          padding: 1rem;
          transition: 0.3s all;
        }
        a:hover {
          color: var(--cyan-base);
          font-weight: 700;

          span {
            color: var(--pink-base);
          }
        }
        li:first-child {
          padding-left: 0;
        }
        li:last-child {
          padding-right: 0;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <PageStyles>
      <header>
        <h1>
          👨‍💻 dolden<span className="yellow">.</span>
          <span className="cyan">dev</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">
                home<span className="yellow">()</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                about<span className="yellow">()</span>
              </Link>
            </li>
            <li>
              <Link to="/work">
                work<span className="yellow">()</span>
              </Link>
            </li>
            <li>
              <Link to="/writing">
                writing<span className="yellow">()</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </PageStyles>
  );
};

export default Header;
