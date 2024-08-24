import React from 'react'
import './Home.scss'
import HeroBanner from '../../Components/Home/HeroBanner/HeroBanner'
import Trending from '../../Components/Home/Trending'
import Popular from '../../Components/Home/Popular'
import TopRated from '../../Components/Home/TopRated'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home
