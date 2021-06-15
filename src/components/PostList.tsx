import React from 'react';
import { useFetchPostsDataQuery } from '../generated/graphqlTypes';
import { Grid } from '../styles/globals';
import { Post } from './Post';

export const PostList = () => {
  const { data } = useFetchPostsDataQuery();
  const posts = data?.allMdx.edges;

  const renderedPosts = posts?.map((post) => {
    return <Post key={post.node.slug!} data={post.node} />;
  });

  return <Grid>{renderedPosts}</Grid>;
};
