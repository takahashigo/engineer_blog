import { ParsedUrlQuery } from 'querystring';
import { ReactNode } from 'react';

export type LayoutPageProps = {
  children: ReactNode;
  title: string;
};

export type ArticlePageProps = {
  articles: Article[];
};

export type ArticleCardListProps = ArticlePageProps;

export type ArticleCardProps = {
  article: Article;
};

export type ArticleDetailProps = ArticleCardProps & { content: ReactNode };

export type Article = {
  id: string;
  title: string;
  slug: string;
  featured_image?: {
    id: string;
  };
  content: string;
  tags: Tag[];
  user_created: {
    id: string;
    last_name: string;
    first_name: string;
    department?: string;
    avatar?: {
      id: string;
    };
  };
  date_created: string;
};

export type Tag = {
  tags_id: {
    tag_name: string;
    featured_image?: {
      id: string;
    };
  };
};

export type TagOnly = {
  id: string;
  tag_name: string;
};

export interface SlugParams extends ParsedUrlQuery {
  slug: string;
}

export interface TagNameParams extends ParsedUrlQuery {
  tag_name: string;
}

export type BeforeSearchViewProps = {
  tags: (TagOnly & { featured_image: { id: string } | null })[];
};

export type Tags = BeforeSearchViewProps;

export type TagCardProps = {
  tag: TagOnly & { featured_image: { id: string } | null };
};

export type TagDetailProps = TagCardProps;

export type ArticleCardListByTagProps = TagCardProps;

export type AfterSearchViewProps = {
  keywordInput: string;
  articles: Article[];
  tags: (TagOnly & { featured_image: { id: string } | null })[];
};

export type SearchFilterTagListProps = {
  tags: (TagOnly & { featured_image: { id: string } | null })[];
};

export type SearchFilterTagProps = {
  tag: TagOnly & { featured_image: { id: string } | null };
};

export type ArticleCardListByInputProps = ArticlePageProps;

export type TagCardByArticlesProps = {
  tag: {
    tags_id: {
      tag_name: string;
      featured_image?: {
        id: string;
      };
    };
  };
};

export type ArticleCount = {
  Articles_aggregated: { count: { id: string } }[];
};

export type TagList = SearchFilterTagListProps;

export type TagResponse = SearchFilterTagListProps;

export type ArticleResponse = {
  Articles: Article[];
};

export type SearchPageProps = {
  articles: Article[];
  tags: (TagOnly & { featured_image: { id: string } | null })[];
};
