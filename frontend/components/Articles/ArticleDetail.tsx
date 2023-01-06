/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { useHighLight } from '../../hooks/prism';
import { convertDate } from '../../lib/date';
import { ArticleDetailProps } from '../../types';
import TagCardByArticles from '../Tags/TagCardByArticle';

const ArticleDetail: FC<ArticleDetailProps> = ({ article, content }) => {
  useHighLight();

  return (
    <div className="px-2">
      {article.featured_image ? (
        <img
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/${article.featured_image.id}`}
          className="h-64 w-full object-fill xs:h-72 sm:h-80 md:h-96"
        />
      ) : null}
      <h1 className="text-2xl sm:text-4xl">{article.title}</h1>
      <div
        className="mb-8 flex space-x-3 pb-4 sm:mb-12 sm:pb-6"
        style={{ borderBottom: '0.5px solid rgb(209 213 219)' }}
      >
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
            <span className="text-sm font-semibold">
              {article.user_created?.last_name +
                article.user_created?.first_name}
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
      <div className="mb-24">{content}</div>
      <div className="mb-1 flex flex-wrap">
        {article.tags.map((tag, index) => {
          return <TagCardByArticles key={index} tag={tag} />;
        })}
      </div>
    </div>
  );
};

export default ArticleDetail;
