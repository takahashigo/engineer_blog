/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Link from 'next/link';
import { ArticleCardProps } from '../../types';
import { filterContent } from '../../utils/filter';
import { convertDate } from '../../lib/date';
import TagCardByArticles from '../Tags/TagCardByArticle';

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  const content = filterContent(article.content);
  // console.log(article.tags);

  return (
    <div
      className="mb-2 pb-4 sm:mb-4 sm:pb-8"
      style={{ borderBottom: '0.5px solid rgb(209 213 219)' }}
    >
      <Link href={`/articles/${article.slug}`}>
        <h4 className="my-0 mb-2 cursor-pointer text-xl font-medium">
          <a className="inline-block w-full text-black no-underline hover:text-gray-500">
            {article.title}
          </a>
        </h4>
      </Link>
      <Link href={`/articles/${article.slug}`}>
        <div className="flex cursor-pointer space-x-3">
          <div className="flex items-center">
            <img
              className="rounded-full"
              src={
                article.user_created.avatar?.id
                  ? `${process.env.NEXT_PUBLIC_ASSETS_URL}/${article.user_created.avatar?.id}`
                  : '/photo.jpg'
              }
              width={48}
              height={48}
              alt="profile"
            />
          </div>
          <div className="my-0">
            <div className="my-0 flex items-baseline space-x-1">
              <span className="text-sm">
                {article.user_created.last_name +
                  article.user_created.first_name}
              </span>
              <span className="text-xs font-extralight">
                {convertDate(new Date(article.date_created))}
              </span>
            </div>
            <p className="my-1 text-xs font-extralight">
              {article.user_created.department}
            </p>
          </div>
        </div>
      </Link>
      {/* <div dangerouslySetInnerHTML={{ __html: html! }} className="overflow-hidden" /> */}
      <Link href={`/articles/${article.slug}`}>
        <a className="mt-1 inline-block w-full cursor-pointer text-sm font-light text-black no-underline">
          {content}
        </a>
      </Link>
      <div className="mb-1 mt-4 flex flex-wrap">
        {article.tags.map((tag, index) => {
          return (
            <TagCardByArticles key={index} tag={tag} />
          );
        })}
      </div>
    </div>
  );
};

export default ArticleCard;
