import { Mdx, Maybe, MdxFrontmatter } from '../../graphql-types';
import { ImageSharp } from '../generated/graphqlTypes';

export type PostNode = { __typename?: 'Mdx' } & Pick<
  Mdx,
  'slug' | 'body' | 'timeToRead'
> & {
    frontmatter?: Maybe<
      { __typename?: 'MdxFrontmatter' } & Pick<
        MdxFrontmatter,
        'title' | 'category' | 'date' | 'id' | 'summary'
      > & {
          image?: Maybe<
            { __typename?: 'File' } & {
              childImageSharp?: Maybe<
                { __typename?: 'ImageSharp' } & Pick<
                  ImageSharp,
                  'gatsbyImageData'
                >
              >;
            }
          >;
        }
    >;
  };
