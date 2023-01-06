import { Group } from '@mantine/core';
import React, { FC } from 'react';
import { SearchFilterTagListProps } from '../../types';
import SearchFilterTag from './SearchFilterTag';

const SearchFilterTagList: FC<SearchFilterTagListProps> = ({ tags }) => {
  return (
    <div
      className="mt-12 w-full rounded-3xl py-4 px-6 sm:w-4/5"
      style={{ border: '1px solid gray' }}
    >
      <h3 className="mt-0 text-base font-medium">関連するタグ</h3>
      <Group align="center" position="left" className="mt-2">
        {tags.map((tag) => (
          <SearchFilterTag key={tag.id} tag={tag} />
        ))}
      </Group>
    </div>
  );
};

export default SearchFilterTagList;
