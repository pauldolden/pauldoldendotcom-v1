import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { FetchPostsDataQuery } from '../generated/graphqlTypes';
import { Grid } from '../styles/globals';
import { Post } from './Post';

export const PostList = () => {
  const data: FetchPostsDataQuery = useStaticQuery(graphql`
    query fetchPostsData {
      allMdx {
        edges {
          node {
            slug
            body
            timeToRead
            frontmatter {
              title
              category
              date
              id
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              summary
            }
          }
        }
      }
    }
  `);
  const posts = data?.allMdx.edges;

  const renderedPosts = posts?.map((post) => {
    return <Post key={post.node.slug!} data={post.node} />;
  });

  return <Grid>{renderedPosts}</Grid>;
};
