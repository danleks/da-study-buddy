import React, { useState, useEffect } from 'react';
import Button from 'components/atoms/Button/Button';
import { NewsWrapper, NewsTemplateHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsTemplate.styles';
import axios from 'axios';

export const query = `
         {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
      `;

const NewsTemplate = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    axios({
      url: 'https://graphql.datocms.com/',
      method: 'post',
      data: { query },
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
      },
    })
      .then(({ data: { data } }) => setArticles(data.allArticles))
      // .then((res) => console.log(res))
      .catch(() => setError('Cannot load articles'));
  }, []);
  return (
    <NewsWrapper>
      <NewsTemplateHeader>University neews feed</NewsTemplateHeader>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <span>{category}</span>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="" /> : null}
            </ContentWrapper>
            <Button label="Read more" />
          </ArticleWrapper>
        ))
      ) : (
        <NewsTemplateHeader>{error ? error : 'Loading...'}</NewsTemplateHeader>
      )}
    </NewsWrapper>
  );
};

export default NewsTemplate;
