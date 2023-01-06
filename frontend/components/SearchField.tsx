import React from 'react';
import { TextInput } from '@mantine/core';
import { Search } from 'tabler-icons-react';

const SearchField = () => {
  return (
    <div className='md:block hidden'>
      <TextInput
        placeholder="キーワード検索"
        radius="lg"
        variant="unstyled"
        size="md"
        icon={<Search size={24} strokeWidth={3} color={'black'} />}
      />
    </div>
  );
};

export default SearchField;
