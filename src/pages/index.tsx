import * as React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Layout from "../components/Layout";

const PageStyles = styled.main`
  background-color: ${theme.blue.base};
`;

const IndexPage = () => {
  return (
    <Layout>
      <PageStyles>
        <div>Hello</div>
      </PageStyles>
    </Layout>
  );
};

export default IndexPage;
