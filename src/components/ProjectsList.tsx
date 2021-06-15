import { Grid } from '../styles/globals';
import { Project } from './Project';
import React from 'react';
import { projects } from '../utils/projects';

export const ProjectsList = () => {
  const renderedProjects = projects.map((project) => {
    return <Project key={project.name} project={project} />;
  });
  return <Grid>{renderedProjects}</Grid>;
};
