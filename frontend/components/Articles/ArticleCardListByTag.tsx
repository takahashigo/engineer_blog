import React, { FC, useMemo, useState } from 'react';
import ArticleCard from './ArticleCard';
import { Article, ArticleCardListByTagProps, ArticleCount } from '../../types';
import { Pagination } from '@mantine/core';
import useSWRImmutable from 'swr/immutable';
import { filteredTagArticleQuery } from '../../queries/articleQueries';
import { filteredTagArticleCount } from '../../queries/tagQueries';
import Loading from '../../utils/Loading';

const ArticleCardListByTag: FC<ArticleCardListByTagProps> = ({ tag }) => {
  const [activePage, setPage] = useState(1);
  const { data, error } = useSWRImmutable<{ Articles: Article[] }, Error>([
    filteredTagArticleQuery,
    { tagName: tag.tag_name, page: activePage },
  ]);
  const { data: total, error: totalError } = useSWRImmutable<
    ArticleCount,
    Error
  >([filteredTagArticleCount, { tag_name: tag.tag_name }]);

  // console.log(total);

  const totalCount = useMemo(() => {
    if (typeof total === 'undefined') {
      return 0;
    }
    return Number(total.Articles_aggregated[0].count.id) % 10 === 0
      ? Math.round(Number(total.Articles_aggregated[0].count.id) / 10)
      : Math.round(Number(total.Articles_aggregated[0].count.id) / 10) + 1;
  }, [total]);

  if (!data && !error) {
    return <Loading />;
  }

  if (!total && !totalError) {
    return <Loading />;
  }

  if (totalCount === 0) {
    return <div>記事がありません</div>;
  }

  return (
    <>
      <div className="mx-auto mb-12 flex flex-col space-y-2 sm:mb-16 md:mx-0">
        {data !== undefined &&
          data.Articles.map((article, index) => {
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

export default ArticleCardListByTag;
