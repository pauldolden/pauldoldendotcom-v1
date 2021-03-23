import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { flexCenter } from "../styles/globals";
import ThemeSwitcher from "./ThemeSwitcher";

const PageStyles = styled.section`
  header {
    ${flexCenter};
    justify-content: space-between;
    border-bottom: 1px solid var(--blue-light);
    padding: 3rem 15%;
    color: var(--pink-base);

    @media (max-width: 1200px) {
      padding: 3rem 5%;
    }

    @media (max-width: 900px) {
      flex-direction: column;
    }

    h1 {
      font-family: "Anaheim";
      font-weight: 700;
      font-size: 4rem;

      @media (max-width: 900px) {
        padding-bottom: 2rem;
      }

      @media (max-width: 479px) {
        font-size: 3.6rem;
      }
    }
    nav {
      ${flexCenter};
      font-family: "Source Code Pro";

      ul {
        display: flex;

        li {
          padding: 1rem;
          transition: 0.3s all;

          @media (max-width: 600px) {
            padding: 5px;
          }
        }

        a {
          @media (max-width: 900px) {
            font-size: 2.4rem;
          }

          @media (max-width: 650px) {
            font-size: 2.2rem;
          }

          @media (max-width: 479px) {
            font-size: 2rem;
          }

          @media (max-width: 400px) {
            font-size: 1.6rem;
          }
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
