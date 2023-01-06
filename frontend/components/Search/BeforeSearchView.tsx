import { Center, Group } from '@mantine/core';
import React, { FC } from 'react';
import { BeforeSearchViewProps } from '../../types';
import TagCard from '../Tags/TagCard';

const BeforeSearchView: FC<BeforeSearchViewProps> = ({ tags }) => {
  // console.log(tags);
  return (
    <Center>
      <div className="mt-10 w-full sm:w-4/5">
        <h4 className="ml-2 text-left">人気の項目</h4>
        <Group align="center" position="center">
          {tags.map((tag, index) => {
            return <TagCard key={index} tag={tag} />;
          })}
        </Group>
      </div>
    </Center>
  );
};

export default BeforeSearchView;
