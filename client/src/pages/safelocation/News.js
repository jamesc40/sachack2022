import React from 'react'
import NewsCard from './NewsCard'
import './News.css'

function News() {
  return (
    <div className='news-container'>
      <h5>NEWS FEED</h5>
      <NewsCard />
    </div>
  )
}

export default News