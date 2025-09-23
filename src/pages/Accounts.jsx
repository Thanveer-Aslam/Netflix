import React from 'react'
import Netflixbanner from '../assets/Netflix banner.jpg'
import SavedShows from '../components/SavedShows';

const Accounts = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[340px] object-cover"
          src={Netflixbanner}
          alt="/"
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-4xl font-bold'>My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
}

export default Accounts
