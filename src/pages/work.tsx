import React from "react";
import styled from "styled-components";
import Work from "../components/Work";
import Layout from "../components/Layout";

const PageStyles = styled.section``;

const work = () => {
  return (
    <Layout>
      <PageStyles>
        <Work />
      </PageStyles>
    </Layout>
  );
};

export default work;
