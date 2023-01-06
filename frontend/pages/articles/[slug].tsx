import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { Grid } from '@mantine/core';
import Layout from '../../components/Layout/Layout';
import ArticleDetail from '../../components/Articles/ArticleDetail';
import SearchField from '../../components/Search/SearchField';
import { client } from '../../lib/client';
import {
  ArticleListQuery,
  FilteredSlugArticleQuery,
} from '../../queries/articleQueries';
import { Article, SlugParams } from '../../types';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

type ArticlePageProps = InferGetStaticPropsType<typeof getStaticProps>;

// ブログ詳細画面
const ArticlePage: NextPage<ArticlePageProps> = ({ article, content }) => {
  return (
    <Layout title="Home">
      <Grid>
        <Grid.Col span={0} md={1}></Grid.Col>
        <Grid.Col span={12} md={7}>
          <ArticleDetail
            article={article.Articles[0]}
            content={<MDXRemote {...content} />}
          />
        </Grid.Col>
        <Grid.Col span={0} md={3}>
          <SearchField />
        </Grid.Col>
        <Grid.Col span={0} md={1}></Grid.Col>
      </Grid>
    </Layout>
  );
};

export default ArticlePage;

// slugからgetStaticProps

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  // const user: User = getUser(params!.slug);

  const article = await client.request(FilteredSlugArticleQuery, {
    slug: params!.slug,
  });

  return {
    props: {
      article,
      content: await serialize(article.Articles[0].content),
    },
  };
};

export const getStaticPaths: GetStaticPaths<SlugParams> = async () => {
  const res: { Articles: Article[] } = await client.request(ArticleListQuery);
  // console.log(res.Articles[0]);

  return {
    paths: res.Articles?.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: 'blocking',
  };
};
