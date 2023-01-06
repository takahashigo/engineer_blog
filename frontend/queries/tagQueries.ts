import { gql } from 'graphql-request';

export const TagListQuery = gql`
  query TagListQuery {
    tags(sort: ["id"], limit: -1) {
      id
      tag_name
      featured_image {
        id
      }
    }
  }
`;

export const TagQuery = gql`
  query TagQuery($tagName: String!) {
    tags(filter: { tag_name: { _eq: $tagName } }) {
      id
      tag_name
      featured_image {
        id
      }
    }
  }
`;

export const TagCountQuery = gql`
  query {
    tags_aggregated {
      count {
        id
      }
    }
  }
`;

export const filteredTagArticleCount = gql`
  query filteredTagArticleCount($tag_name: String!) {
    Articles_aggregated(
      filter: { tags: { tags_id: { tag_name: { _eq: $tag_name } } } }
    ) {
      count {
        id
      }
    }
  }
`;

export const TagDetailListQuery = gql`
  query TagDetailListQuery {
    tags(sort: ["id"], limit: -1) {
      id
      tag_name
      featured_image {
        id
      }
    }
  }
`;
