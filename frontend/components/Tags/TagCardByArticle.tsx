/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Group } from '@mantine/core';
import Link from 'next/link';
import React, { FC } from 'react';
import { useBorderTransition } from '../../hooks/useBorderTransition';
import { TagCardByArticlesProps } from '../../types';

const TagCardByArticles: FC<TagCardByArticlesProps> = ({ tag }) => {
  const { handleMouseEnter, handleMouseLeave } = useBorderTransition();
  return (
    <Link href={`/tags/${tag.tags_id.tag_name}`}>
      <Group
        align="center"
        className="transion-border transion-card my-1 mr-2 cursor-pointer rounded-3xl py-1 px-2 hover:shadow hover:shadow-red-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={
            tag.tags_id.featured_image
              ? `${process.env.NEXT_PUBLIC_ASSETS_URL}/${tag.tags_id.featured_image.id}`
              : '/photo.jpg'
          }
          width={26}
          height={26}
          className=" -mr-1.5 rounded-full"
        />
        <span className="text-sm">{tag.tags_id.tag_name}</span>
      </Group>
    </Link>
  );
};

export default TagCardByArticles;
