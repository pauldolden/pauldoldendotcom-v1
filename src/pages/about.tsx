import React from 'react';
import styled from 'styled-components';
import About from '../components/About';
import Layout from '../components/Layout';

const PageStyles = styled.section``;

const about = () => {
 return (
  <Layout title="About">
   <PageStyles>
    <About />
   </PageStyles>
  </Layout>
 );
};

export default about;
