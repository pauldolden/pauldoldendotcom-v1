import React from "react";
import styled from "styled-components";

const PageStyles = styled.section`
  padding: 3rem 0;
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
          websites, but the work I'm most proud of{" "}
        </div>
      </div>
    </PageStyles>
  );
};

export default Work;
