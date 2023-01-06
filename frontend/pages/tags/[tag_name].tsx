import { Grid } from '@mantine/core';
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import React from 'react';
import ArticleCardListByTag from '../../components/Articles/ArticleCardListByTag';
import Layout from '../../components/Layout/Layout';
import TagDetail from '../../components/Tags/TagDetail';
import { client } from '../../lib/client';
import { filteredTagArticleQuery } from '../../queries/articleQueries';
import { TagListQuery, TagQuery } from '../../queries/tagQueries';
import { Article, TagNameParams, Tags } from '../../types';

type TagPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const TagPage: NextPage<TagPageProps> = ({ articles, tag }) => {
  // console.log(tag);
  return (
    <Layout title="Home">
      <Grid>
        <Grid.Col span={0} md={1}></Grid.Col>
        <Grid.Col span={12} md={10} className="">
          <TagDetail tag={tag} />
          <ArticleCardListByTag tag={tag} />
        </Grid.Col>
        <Grid.Col span={0} md={1}></Grid.Col>
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  // const user: User = getUser(params!.slug);

  const articles: Article[] = await client.request(filteredTagArticleQuery, {
    tagName: params!.tag_name,
    page: 1,
  });

  const tag: Tags = await client.request(TagQuery, {
    tagName: params!.tag_name,
  });

  return {
    props: {
      articles,
      tag: tag.tags[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths<TagNameParams> = async () => {
  const res: Tags = await client.request(TagListQuery);
  // console.log(res);

  return {
    paths: res.tags.map((tag) => ({
      params: {
        tag_name: tag.tag_name,
      },
    })),
    fallback: 'blocking',
  };
};

export default TagPage;
