import React from "react";
import styled from "styled-components";
import Writing from "../components/Writing";
import Layout from "../components/Layout";

const PageStyles = styled.section``;

const work = () => {
  return (
    <Layout>
      <PageStyles>
        <Writing />
      </PageStyles>
    </Layout>
  );
};

export default work;
