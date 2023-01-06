import React from 'react';
import useSWRImmutable from 'swr/immutable';
import { TagListQuery } from '../../queries/tagQueries';
import { TagList } from '../../types';
import Loading from '../../utils/Loading';
import SearchFilterTag from './SearchFilterTag';

const SearchField = () => {
  const { data: tags, error } = useSWRImmutable<TagList, Error>(TagListQuery);
  const isLoading = !tags && !error;
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="hidden md:block">
      <div className="mb-1 ml-4 flex flex-wrap">
        {tags !== undefined &&
          tags.tags.map((tag, index) => {
            return (
              <div key={index} className="my-1 mr-2">
                <SearchFilterTag tag={tag} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchField;
