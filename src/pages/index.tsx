import * as React from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import Work from "../components/Work";
import Writing from "../components/Writing";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <About />
      <Work />
      <Writing />
    </Layout>
  );
};

export default IndexPage;
