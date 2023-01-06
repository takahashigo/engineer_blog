import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import Layout from '../components/Layout/Layout';
import { Grid } from '@mantine/core';
import ArticleCardList from '../components/Articles/ArticleCardList';
import SearchField from '../components/Search/SearchField';
import { client } from '../lib/client';
import { articleCountQuery, ArticleQuery } from '../queries/articleQueries';
import { SWRConfig, unstable_serialize } from 'swr';
import { TagListQuery } from '../queries/tagQueries';

type IndexProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home: NextPage<IndexProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Layout title="Home">
        <Grid>
          <Grid.Col span={0} md={1}></Grid.Col>
          <Grid.Col span={12} md={7}>
            <ArticleCardList />
          </Grid.Col>
          <Grid.Col span={0} md={3}>
            <SearchField />
          </Grid.Col>
          <Grid.Col span={0} md={1}></Grid.Col>
        </Grid>
      </Layout>
    </SWRConfig>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const responsePage1 = await client.request(ArticleQuery, { page: 1 });
  const responsePage2 = await client.request(ArticleQuery, { page: 2 });
  const responseArticleCount = await client.request(articleCountQuery);
  const responseTags = await client.request(TagListQuery);

  if (!responsePage1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      fallback: {
        // unstable_serialize() に array 形式のキーを渡す
        [unstable_serialize([ArticleQuery, { page: 1 }])]:
          responsePage1.Articles,
        [unstable_serialize([ArticleQuery, { page: 2 }])]:
          responsePage2.Articles,
        [articleCountQuery]:
          responseArticleCount.Articles_aggregated[0].count.id,
        [TagListQuery]: responseTags,
      },
    },
  };
};
