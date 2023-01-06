import React, { FC, useMemo, useState } from 'react';
import ArticleCard from './ArticleCard';
import { ArticleCardListByInputProps } from '../../types';
import { Pagination } from '@mantine/core';

const ArticleCardListByInput: FC<ArticleCardListByInputProps> = ({
  articles,
}) => {
  const [activePage, setPage] = useState(1);

  const totalCount = useMemo(() => {
    return articles.length % 10 === 0
      ? Math.round(articles.length / 10)
      : Math.round(articles.length / 10) + 1;
  }, [articles.length]);

  if (totalCount === 0) {
    return <div>記事がありません</div>;
  }

  return (
    <>
      <div className="mb-12 flex w-full flex-col space-y-2 sm:mb-16 sm:w-4/5">
        {articles.map((article, index) => {
          return <ArticleCard key={article.slug} article={article} />;
        })}
      </div>
      <Pagination
        page={activePage}
        onChange={setPage}
        total={totalCount}
        position="center"
        color="red"
      />
    </>
  );
};

export default ArticleCardListByInput;
