import React from 'react'
import Main from '../components/Main'
import Rows from '../components/Rows'
import requests from '../../request'

const Home = () => {
  return (
    <>
      <Main />
      <Rows title="Trending" fetchURL={requests.requestTrending} />
      <Rows title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Rows title="Popular" fetchURL={requests.requestPopular} />
      <Rows title="Top Rated" fetchURL={requests.requestTopRated} />
      <Rows title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
}

export default Home
