import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';

const PageStyles = styled.section`
  h1 {
  }
  h2 {
    font-size: 2rem;
  }
`;

const shortcodes = { Link }; // Provide common components here
export default function PostTemplate({ data: { mdx } }: any) {
  return (
    <Layout title={mdx.frontmatter.title}>
      <PageStyles>
        <h1>{mdx.frontmatter.title}</h1>
        <h2>{mdx.frontmatter.date}</h2>
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </PageStyles>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
  }
`;
