import React from 'react'
import ChartList from './ChartList';
import TopBar from './TopBar'

export default function Chart() {
  return (
    <div className="h- text-white ml-24">
      <TopBar />
      <div className='flex'>
        <img src="shoes.png" alt="" />
        <div className='w-1/3 ml-5 flex flex-col justify-around'>
          
          <div className='mt-12'>
          <p className='text-3xl '>Tomorrow tunes</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus animi necessitatibus, ab reiciendis cumque consequatur recusandae molestias </p>
          <p>64 Songs-16 hrs+</p></div>
          <div>
            <button className='bg-[#1D2123] mx-2 h-[36px] rounded-3xl px-5 opacity-50'><img src="play.png" alt="" className='inline' /> Play all</button>
            <button className='bg-[#1D2123] mx-2 h-[36px] rounded-3xl px-5 opacity-50'><img src="addsong.png" alt="" className='inline' /> Add to collection</button>
            <button className='bg-[#1D2123] mx-2 h-[36px] rounded-3xl px-5 opacity-50'><img src="like.png" alt="" /></button>
          </div>
        </div>
      </div>
      <ChartList/>
    </div>
  );
}
