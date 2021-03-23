import React from "react";
import styled from "styled-components";
import { tools } from "../images/icons";
import { flexCenter, flexCenterCenter } from "../styles/globals";
import theme from "../styles/theme";

const PageStyles = styled.section`
  padding: 3rem 0;

  .tool-container {
    position: relative;
    ${flexCenter};
    flex-wrap: wrap;
    height: 32px;
    width: 33%;
    margin-bottom: 2rem;

    @media (max-width: 900px) {
      width: 20%;
      margin-bottom: 4rem;
    }

    @media (max-width: 600px) {
      width: 33%;
    }

    &:hover .tool-name {
      display: flex;
    }
  }

  .img-cont {
    height: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    width: 100%;
    display: flex;
    background-position: center;

    &:hover {
      cursor: pointer;
    }
  }
  .text {
    flex: 1;
  }
  .icons {
    width: 27.5rem;
    ${flexCenter};
    flex-wrap: wrap;
    margin-left: 3rem;

    @media (max-width: 900px) {
      margin: 0;
      margin-top: 5rem;
      width: 100%;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;

    @media (max-width: 900px) {
      flex-direction: column;
    }
  }
  .tool-name {
    background-color: var(--pink-base);
    padding: 1.5rem;
    border-radius: 5px;
    color: var(--cyan-base);
    font-weight: 600;
    ${flexCenterCenter};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 6.5rem;
    display: none;
    z-index: 10;
    text-align: center;
  }

  .str {
    text-decoration: line-through;
  }
`;

const About = () => {
  const icons = tools.map((tool) => {
    return (
      <div key={tool.alt} className="tool-container">
        <div
          className="img-cont"
          style={{ backgroundImage: `url(${tool.img})` }}
        ></div>
        <div className="tool-name">{tool.alt}</div>
      </div>
    );
  });

  return (
    <PageStyles>
      <h2>
        about<span className="yellow">.</span>
        <span className="cyan">me</span>
      </h2>
      <div className="content">
        <div className="text">
          <p>
            Hey 👋! My name is Paul Dolden, I'm a full-stack developer from
            Essex, UK. I currently work for 2Dmedia, in Witham, Essex building
            custom E-Commerce sites. I like JavaScript, The JAMStack and open
            source. I enjoy dabbling with all manner of tech, but I mostly build
            websites with these tools... (those ones, over there) 👉.
          </p>
          <p>
            On the rare occasions that I'm not writing code, I'm usually
            watching dumb shark movies with my wife 🦈, playing video games 🎮,
            avoiding <span className="str">finishing</span> starting that novel
            📖, watching cricket or football 🏏, or taking selfies with my dog
            🐕.
          </p>
          <p>
            You can find me sometimes almost tweeting on{" "}
            <a
              href="https://twitter.com/pauldolden"
              style={{ color: "#00ACEE" }}
            >
              twitter
            </a>
            , forgetting to push to{" "}
            <a
              href="https://github.com/pauldolden"
              style={{ color: "#8f3e9d" }}
            >
              github
            </a>{" "}
            or passively trying to make friends on{" "}
            <a
              href="https://www.linkedin.com/in/paul-dolden-2ba7a9142/"
              style={{ color: "#2766c2" }}
            >
              linkedin
            </a>
            .
          </p>
        </div>
        <div className="icons">{icons}</div>
      </div>
    </PageStyles>
  );
};

export default About;
