/* eslint-disable react-hooks/rules-of-hooks */
import { Center, TextInput } from '@mantine/core';
import type { NextPage, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import React, { useCallback, useMemo, useState } from 'react';
import { Search } from 'tabler-icons-react';
import Layout from '../components/Layout/Layout';
import AfterSearchView from '../components/Search/AfterSearchView';
import BeforeSearchView from '../components/Search/BeforeSearchView';
import { useBorderTransition } from '../hooks/useBorderTransition';
import { client } from '../lib/client';
import { ArticleListQuery } from '../queries/articleQueries';
import { TagDetailListQuery } from '../queries/tagQueries';
import {
  ArticleResponse,
  SearchFilterTagListProps,
  SearchPageProps,
} from '../types';
const ScrollRevealContainer = dynamic(import('../lib/ScrollRevealContainer'), {
  ssr: false,
});

const searchPage: NextPage<SearchPageProps> = ({ articles, tags }) => {
  const sliceTags = useMemo(() => {
    return tags.slice(0, 42);
  }, [tags]);
  const [tagInput, setTagInput] = useState('');
  const [keywordInput, setKeywordInput] = useState('');
  const [filterTags, setFilterTags] = useState(sliceTags);
  const [viewToggle, setViewToggle] = useState(false);
  const { isHover, handleMouseEnter, handleMouseLeave } = useBorderTransition();

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value.trimStart();
      setTagInput(input);
      setFilterTags(
        sliceTags.filter((tag) =>
          tag.tag_name.toLowerCase().includes(input.toLowerCase())
        )
      );
    },
    [sliceTags]
  );
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'Enter':
          setViewToggle(!viewToggle);
          setKeywordInput(tagInput);
          break;
        case 'ArrowUp':
          break;
        case 'ArrowDown':
          break;
        default:
          break;
      }
    },
    [tagInput, viewToggle]
  );

  return (
    <Layout title="search">
      {/* 入力フォーム */}
      <Center className="mt-4">
        <TextInput
          placeholder="キーワードを入力..."
          radius="xl"
          variant="unstyled"
          size="lg"
          value={tagInput}
          onChange={handleInput}
          icon={
            <Search
              size={24}
              strokeWidth={3}
              color={isHover ? 'red' : 'gray'}
            />
          }
          className="transion-border w-full rounded-3xl hover:shadow hover:shadow-red-500 sm:w-4/5"
          autoComplete="off"
          autoFocus
          onKeyDown={(e) => onKeyDown(e)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Center>
      {/* 検索ボタンが押されたら下記コンポーネントを出し分け、router.pushにクエリ付きで飛ばす */}
      {/* 検索後（queryがある場合）<AfterSearchView /> */}
      {!viewToggle ? (
        <ScrollRevealContainer>
          <BeforeSearchView tags={filterTags} />
        </ScrollRevealContainer>
      ) : (
        <AfterSearchView
          keywordInput={keywordInput}
          articles={articles}
          tags={tags}
        />
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res: SearchFilterTagListProps = await client.request(
    TagDetailListQuery
  );
  const resposeArticles: ArticleResponse = await client.request(
    ArticleListQuery
  );

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles: resposeArticles.Articles,
      tags: res.tags,
    },
  };
};

export default searchPage;
