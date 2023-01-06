/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Group } from '@mantine/core';
import Link from 'next/link';
import React, { FC } from 'react';
import { useBorderTransition } from '../../hooks/useBorderTransition';
import { SearchFilterTagProps } from '../../types';

const SearchFilterTag: FC<SearchFilterTagProps> = ({ tag }) => {
  const { handleMouseEnter, handleMouseLeave } = useBorderTransition();
  return (
    <Link href={`/tags/${tag.tag_name}`}>
      <Group
        align="center"
        className="transion-border transion-card cursor-pointer rounded-3xl py-1 px-2 hover:shadow hover:shadow-red-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={
            tag.featured_image
              ? `${process.env.NEXT_PUBLIC_ASSETS_URL}/${tag.featured_image.id}`
              : '/photo.jpg'
          }
          width={26}
          height={26}
          className=" -mr-1.5 rounded-full"
        />
        <span className="text-sm">{tag.tag_name}</span>
      </Group>
    </Link>
  );
};

export default SearchFilterTag;
