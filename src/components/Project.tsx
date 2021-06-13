import React from 'react';
import styled from 'styled-components';
import { Project as ProjectInterface } from '../types/Project';

interface Props {
  project: ProjectInterface;
}

const Wrapper = styled.div`
  width: 50%;
  padding-right: 1rem;
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
    padding-right: 1rem;
  }
`;

export const Project = ({ project }: Props) => {
  return (
    <Wrapper>
      <article key={project.name}>
        <a href={project.url}>
          <h3>{project.name}</h3>
        </a>
        <h4>Completed: </h4>
        <div>{project.completed}</div>
        <div>
          <h4>Description: </h4>
          <p>{project.desc}</p>
        </div>
        <h4>Tech Stack:</h4>
        <div>
          {project.stack.map((item: any) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>
    </Wrapper>
  );
};
