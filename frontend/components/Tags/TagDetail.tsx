/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Center, Grid } from '@mantine/core';
import React, { FC } from 'react';
import { TagDetailProps } from '../../types';

const TagDetail: FC<TagDetailProps> = ({ tag }) => {
  return (
    <Grid mb={42}>
      <Grid.Col span={4} xs={2.5} sm={2} lg={1.5}>
        <Center>
          <img
            src={
              tag.featured_image
                ? `${process.env.NEXT_PUBLIC_ASSETS_URL}/${tag.featured_image.id}`
                : '/photo.jpg'
            }
            width={100}
            height={100}
            className=" rounded-full"
          />
        </Center>
      </Grid.Col>
      <Grid.Col span={8} xs={9} sm={10} lg={10.5}>
        <h1 className="mb-0 mt-3 text-3xl font-medium">{tag.tag_name}</h1>
        <p>{tag.tag_name}に関しての記事一覧</p>
      </Grid.Col>
    </Grid>
  );
};

export default TagDetail;
