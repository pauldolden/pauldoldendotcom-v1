import React from 'react';
import styled from 'styled-components';
import { Mdx, Maybe, MdxFrontmatter } from '../generated/graphqlTypes';

const PostStyles = styled.article``;

type Node = { __typename?: 'Mdx' } & Pick<Mdx, 'slug' | 'timeToRead'> & {
    frontmatter?: Maybe<
      { __typename?: 'MdxFrontmatter' } & Pick<
        MdxFrontmatter,
        'title' | 'category' | 'date' | 'id'
      >
    >;
  };

interface Props {
  data: Node;
}

export const Post = ({ data }: Props) => {
  return <PostStyles>{data.frontmatter?.title}</PostStyles>;
};
