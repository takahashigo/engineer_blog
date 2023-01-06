import React, { FC, useMemo } from 'react';
import { AfterSearchViewProps } from '../../types';
import { getIsDuplicate } from '../../utils/getIsDuplicate';
import ArticleCardListByInput from '../Articles/ArticleCardListByInput';
import SearchFilterTagList from './SearchFilterTagList';

const AfterSearchView: FC<AfterSearchViewProps> = ({
  keywordInput,
  articles,
  tags,
}) => {
  const filteredTags = useMemo(() => {
    return tags.filter((tag) =>
      tag.tag_name.toLowerCase().includes(keywordInput.toLowerCase())
    );
  }, [keywordInput, tags]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const tags = article.tags.map((tag) => tag.tags_id.tag_name);
      return (
        article.title.toLowerCase().includes(keywordInput.toLowerCase()) ||
        article.content.toLowerCase().includes(keywordInput.toLowerCase()) ||
        article.slug.toLowerCase().includes(keywordInput.toLowerCase()) ||
        getIsDuplicate(
          filteredTags.map((tag) => tag.tag_name),
          tags
        )
      );
    });
  }, [articles, filteredTags, keywordInput]);

  return (
    <div className="flex flex-col items-center gap-10">
      {/* filterTagsを回す */}
      <SearchFilterTagList tags={filteredTags} />
      {/* filteredArticlesを回す */}
      <ArticleCardListByInput articles={filteredArticles} />
    </div>
  );
};

export default AfterSearchView;
