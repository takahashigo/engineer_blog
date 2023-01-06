/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Center } from '@mantine/core';
import Link from 'next/link';
import React, { FC } from 'react';
import { useBorderTransition } from '../../hooks/useBorderTransition';
import { TagCardProps } from '../../types';

const TagCard: FC<TagCardProps> = ({ tag }) => {
  const { handleMouseEnter, handleMouseLeave } = useBorderTransition();
  return (
    <Link href={`/tags/${tag.tag_name}`}>
      <a className="text-black no-underline">
        <Center
          className="transion-border transion-card h-24 w-28 rounded-2xl hover:shadow hover:shadow-red-100"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mt-2 flex flex-col items-center justify-center">
            <img
              src={
                tag.featured_image
                  ? `${process.env.NEXT_PUBLIC_ASSETS_URL}/${tag.featured_image.id}`
                  : '/photo.jpg'
              }
              width={48}
              height={48}
              className=" rounded-full object-contain"
            />
            <p className="my-0 mt-1 py-0 text-center text-sm">{tag.tag_name}</p>
          </div>
        </Center>
      </a>
    </Link>
  );
};

export default TagCard;
