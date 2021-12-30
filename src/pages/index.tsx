import * as React from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Work from '../components/Work';

const IndexPage = () => {
  return (
    <Layout title="Home">
      <About />
      <Work />
    </Layout>
  );
};

export default IndexPage;
