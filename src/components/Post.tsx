import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PostNode } from '../types/PostNode';

const PostStyles = styled.article`
  .imageWrapper {
    margin-bottom: 2rem;
  }
`;

interface Props {
  data: PostNode;
}

export const Post = ({ data }: Props) => {
  return (
    <Link to={`/posts/${data.slug}`}>
      <PostStyles>
        {data.frontmatter?.image && (
          <div className="imageWrapper">
            <GatsbyImage
              image={data.frontmatter?.image.childImageSharp?.gatsbyImageData}
              alt={data.frontmatter.title}
            />
          </div>
        )}
        <div>
          <h3>{data.frontmatter?.title}</h3>
          <p>{data.frontmatter?.date}</p>
          <p>{data.frontmatter?.summary}</p>
          <p>{data.timeToRead} minute read.</p>
          <p>Category: {data.frontmatter?.category}</p>
        </div>
      </PostStyles>
    </Link>
  );
};
