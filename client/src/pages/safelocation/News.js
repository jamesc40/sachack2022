import React from 'react'
import NewsCard from './NewsCard'
import './News.css'
import { Scrollbars } from 'react-custom-scrollbars';

function News() {
  return (
    <div className='news-container'>
      <div className='title-container'>
      <h5>NEWS FEED</h5>
      </div>
      <Scrollbars style={{ width: 500, height: 300 }}>
      <NewsCard />
      </Scrollbars>
    </div>
  )
}

export default News