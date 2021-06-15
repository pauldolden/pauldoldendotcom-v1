import React from 'react';
import styled from 'styled-components';
import { ProjectsList } from './ProjectsList';

const PageStyles = styled.section`
  padding: 3rem 0;

  .content {
    display: flex;
    flex-direction: column;
  }
`;

const Work = () => {
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
        <ProjectsList />
      </div>
    </PageStyles>
  );
};

export default Work;
