import React from 'react';
import { projects } from '../utils/projects';
import { Project } from './Project';

export const ProjectsList = () => {
  const renderedProjects = projects.map((project) => {
    return <Project project={project} />;
  });
  return <div>{renderedProjects}</div>;
};
