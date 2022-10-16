import React from 'react'
import NewsCard from './NewsCard'
import './News.css'

function News() {
  return (
    <div className='news-container'>
      <div className='title-container'>
      <h5>NEWS FEED</h5>
      </div>
      <NewsCard />
    </div>
  )
}

export default News