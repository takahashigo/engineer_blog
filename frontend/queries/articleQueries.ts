import { gql } from 'graphql-request';

export const ArticleQuery = gql`
  query ArticleQuery($page: Int!) {
    Articles(sort: ["-date_created"], limit: 10, page: $page) {
      id
      title
      slug
      featured_image {
        id
      }
      content
      tags {
        tags_id {
          tag_name
          featured_image {
            id
          }
        }
      }
      user_created {
        id
        last_name
        first_name
        department
        avatar {
          id
        }
      }
      date_created
    }
  }
`;

export const FilteredSlugArticleQuery = gql`
  query filteredSlugArticleQuery($slug: String!) {
    Articles(filter: { slug: { _eq: $slug } }) {
      id
      title
      slug
      featured_image {
        id
      }
      content
      tags {
        tags_id {
          tag_name
          featured_image {
            id
          }
        }
      }
      user_created {
        id
        last_name
        first_name
        department
        avatar {
          id
        }
      }
      date_created
    }
  }
`;

export const ArticleListQuery = gql`
  query ArticleListQuery {
    Articles(sort: ["-date_created"], limit: -1) {
      id
      title
      slug
      featured_image {
        id
      }
      content
      tags {
        tags_id {
          tag_name
          featured_image {
            id
          }
        }
      }
      user_created {
        id
        last_name
        first_name
        department
        avatar {
          id
        }
      }
      date_created
    }
  }
`;

export const filteredTagArticleQuery = gql`
  query filteredTagArticleQuery($tagName: String!, $page: Int!) {
    Articles(
      sort: ["-date_created"]
      limit: 10
      page: $page
      filter: { tags: { tags_id: { tag_name: { _eq: $tagName } } } }
    ) {
      id
      title
      slug
      featured_image {
        id
      }
      content
      tags {
        tags_id {
          tag_name
          featured_image {
            id
          }
        }
      }
      user_created {
        id
        last_name
        first_name
        department
        avatar {
          id
        }
      }
      date_created
    }
  }
`;

export const filteredTagsArticleQuery = gql`
  query filteredTagsArticleQuery($tagNames: [String!]!) {
    Articles(
      sort: ["-date_created"]
      limit: -1
      filter: { tags: { tags_id: { tag_name: { _in: $tagNames } } } }
    ) {
      id
      title
      slug
      featured_image {
        id
      }
      content
      tags {
        tags_id {
          tag_name
          featured_image {
            id
          }
        }
      }
      user_created {
        id
        last_name
        first_name
        department
        avatar {
          id
        }
      }
      date_created
    }
  }
`;

export const articleCountQuery = gql`
  # 全記事数取得、全タグ数取得
  query {
    Articles_aggregated {
      count {
        id
      }
    }
  }
`;
