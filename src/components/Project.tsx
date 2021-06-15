import { Project as ProjectInterface } from '../types/Project';
import React from 'react';
import styled from 'styled-components';

interface Props {
  project: ProjectInterface;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Project = ({ project }: Props): JSX.Element => {
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
          {project.stack.map((item: string) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>
    </Wrapper>
  );
};
