/**
 * @file NewsCards
 */

import React from 'react'
import { Card, H2, Paragraph, NewsImg } from '../../atoms'

const NewsCards = ({ articles = [], ...props }) =>
  <>
    {
      articles.length
        ?
        articles.map((article, idx) =>
          <Card key={idx} {...props}>
            <NewsImg src={article.urlToImage} />
            <H2>{article.title}</H2>
            <Paragraph>{article.description}</Paragraph>
          </Card>)
        :
        'Загрузка...'
    }
  </>

export default NewsCards
