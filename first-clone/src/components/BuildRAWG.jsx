import React from 'react'
import Cards from './Cards'
const BuildRAWG = () => {
  return (
    <>
    <div className='max-w-full flex flex-col max-h-fit p-5  items-center justify-center  '>
    <div className='text-center max-w-lg'>
    <h3 className='tracking-wider font-bold text-md text-gray-500 '>Why Build on RAWG</h3>
    <h1 className='text-4xl font-bold m-3 '>500,000+ games for 50 platforms including mobiles</h1>
</div>
    <div className='grid sm:grid-cols-3 sm:grid-rows-2  grid-cols-1 sm:w-max p-4 gap-6 w-fit place-self-center '>
<Cards   heading="2,100,000" title="screenshots" className="bg-black text-white relative"/>
<Cards   heading="1,100,000" title="ratings"  className="bg-blue-600 text-white  relative"/>
<Cards   heading="220,000" title="developers"  className="bg-white text-black relative"/>
<Cards   heading="58,000" title="tags" className="bg-blue-600 text-white relative"/>
<Cards   heading="45,000" title="publishers" className="bg-white text-black relative"/>
<Cards   heading="24,000" title="people" className="bg-black text-white relative"/>

    </div>
    <div className='flex gap-4 m-5 flex-col sm:flex-row'>
        <div className="left-text flex flex-col gap-4">
            <div className='p-5 w-80 h-fit  bg-gray-200 text-black font-medium text-lg  rounded-xl'>
                <p>Comprehensive video game data: descriptions, genres, release dates, links to stores, ESRB-ratings, average playtime, gameplay videos, Metacritic ratings, official websites, system requirements, linked YouTube and Twitch videos, DLCs and franchises.
                </p>
            </div>
            <div className='p-5 w-80 h-fit bg-gray-200 text-black font-medium text-lg rounded-xl '>
                <p>Where to buy: links to digital distribution services.
                </p>
            </div>
        </div>
        <div className="right-text flex flex-col gap-6 h-[404px] p-2">
            <div className='p-5 w-80 h-fit bg-gray-200 text-black font-medium text-lg rounded-xl'>Player activity data: Steam average playtime and RAWG player counts and ratings.
            </div>
            <div className='p-5 w-80 h-fit  bg-gray-200 text-black font-medium text-lg rounded-xl'>Rapidly growing and getting better by user contribution and our algorithms.
            </div>
            <div className='p-5 w-80 h-fit bg-gray-200 text-black font-medium text-lg  rounded-xl'>Similar games based on computer vision.
            </div>
        </div>
    </div>

    </div> 

    </>
  )
}

export default BuildRAWG