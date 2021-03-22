import React from "react";
import styled from "styled-components";
import { projects } from "../utils/projects";

const PageStyles = styled.section`
  padding: 3rem 0;

  .content {
    display: flex;
    flex-direction: column;

    .projects {
      padding-top: 2rem;
      flex-wrap: wrap;
      display: flex;
      margin: 0 -1rem -1rem 0;

      & > * {
        padding: 0 1rem 1rem 0;
      }
    }

    .project-wrapper {
      width: 50%;
      padding-right: 1rem;
    }

    article {
      background-color: var(--blue-light);
      width: 100%;
      padding: 2rem;
      height: 30rem;

      h4 {
        padding-top: 1rem;
      }

      a {
        color: var(--pink-base);
        font-weight: 700;

        &:hover {
          color: var(--cyan-base);
        }
      }

      span::after {
        content: ", ";
      }
      span:last-child::after {
        content: ".";
      }
    }
  }
`;

const Work = () => {
  const projMap = projects.map((project) => {
    return (
      <div className="project-wrapper">
        <article>
          <a href={project.url}>{project.name}</a>
          <h4>Completed: </h4>
          <div>{project.completed}</div>
          <div>
            <h4>Description: </h4>
            <p>{project.desc}</p>
          </div>
          <h4>Tech Stack:</h4>
          <div>
            {project.stack.map((item) => (
              <span>{item}</span>
            ))}
          </div>
        </article>
      </div>
    );
  });
  return (
    <PageStyles>
      <h2>
        my<span className="yellow">.</span>
        <span className="cyan">work</span>
      </h2>
      <div className="content">
        <div className="text">
          My professional portfolio inludes a number of Custom E-Commerce
          websites, however, the work I'm always most proud of are my personal
          projects, like these 👇.
        </div>
        <div className="projects">{projMap}</div>
      </div>
    </PageStyles>
  );
};

export default Work;
