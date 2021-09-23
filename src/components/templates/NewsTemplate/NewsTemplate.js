import React, { useState, useEffect } from 'react';
import Button from 'components/atoms/Button/Button';
import { NewsWrapper, NewsTemplateHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsTemplate.styles';
import axios from 'axios';

const NewsTemplate = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    axios({
      url: 'https://graphql.datocms.com/',
      method: 'post',
      data: {
        query: `
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
        `,
      },
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
      },
    })
      .then(({ data: { data } }) => setArticles(data.allArticles))
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
            <Button secondary>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsTemplateHeader>{error ? error : 'Loading...'}</NewsTemplateHeader>
      )}
    </NewsWrapper>
  );
};

export default NewsTemplate;
