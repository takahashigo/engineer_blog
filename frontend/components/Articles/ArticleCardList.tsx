import React, { FC, useMemo, useState } from 'react';
import ArticleCard from './ArticleCard';
import { Article } from '../../types';
import { Pagination } from '@mantine/core';
import useSWRImmutable from 'swr/immutable';
import { articleCountQuery, ArticleQuery } from '../../queries/articleQueries';
import Loading from '../../utils/Loading';

const ArticleCardList: FC = () => {
  const [activePage, setPage] = useState(1);
  const { data, error } = useSWRImmutable<Article[], Error>([
    ArticleQuery,
    { page: activePage },
  ]);
  const { data: total, error: totalError } = useSWRImmutable(articleCountQuery);
  // console.log(data);
  const totalCount = useMemo(() => {
    return total % 10 === 0
      ? Math.round(total / 10)
      : Math.round(total / 10) + 1;
  }, [total]);

  if (!data && !error) {
    return <Loading />;
  }

  if (!total && !totalError) {
    return <Loading />;
  }

  return (
    <>
      <div className="mx-auto mb-12 flex flex-col space-y-2 sm:mb-16 md:mx-0">
        {data !== undefined &&
          data.map((article, index) => {
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

export default ArticleCardList;
