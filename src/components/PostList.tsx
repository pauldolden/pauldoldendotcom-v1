import React from 'react';
import styled from 'styled-components';
import { useFetchPostsDataQuery } from '../generated/graphqlTypes';
import { Post } from './Post';

const PostListStyles = styled.article`
  margin-top: 2rem;
`;

export const PostList = () => {
  const { data } = useFetchPostsDataQuery();
  const posts = data?.allMdx.edges;

  const renderedPosts = posts?.map((post) => {
    return <Post key={post.node.slug!} data={post.node} />;
  });

  return <PostListStyles>{renderedPosts}</PostListStyles>;
};
