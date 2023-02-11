import React from 'react'
import SongList from './SongList'
import TopBar from './TopBar'

export default function Home() {
  return (
    
    <div className='w-full text-white ml-24'>
        <TopBar/>
        <div className='flex justify-around  w-full'>
        <div className='bg-[#609EAF] h-[373px] w-[686px] rounded-3xl flex text-white'>
            <div className='w-1/2 pl-10 flex flex-col justify-around'>
                <p>Currated Playlist</p>
                <div>
                <p className='text-3xl font-bold'>Hits</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
                <p>33k Likes</p>
            </div>
            <div className='pl-10'>
                <img src="kdot.png" alt="" className='max-h-full'/>
            </div>
        </div>

        <div className='text-white'>
            <p className='text-2xl'>Top Charts</p><br />
            <div className='bg-[#1A1E1F] flex h-[96px] w-[417px] p-2 justify-around rounded-2xl mb-3'>
                <img src="head.png" alt="" />
                <div>
                <p className='text-xl'>Alte Cruise</p>
                <p className='text-gray-300' >Spotify</p>
                <p>2:10:15</p>
                </div>
            </div>
            <div className='bg-[#1A1E1F] flex h-[96px] w-[417px] p-2 justify-around rounded-2xl mb-3'>
                <img src="head.png" alt="" />
                <div>
                <p className='text-xl'>Alte Cruise</p>
                <p className='text-gray-300' >Spotify</p>
                <p>2:10:15</p>
                </div>
            </div>
            <div className='bg-[#1A1E1F] flex h-[96px] w-[417px] p-2 justify-around rounded-2xl mb-3'>
                <img src="head.png" alt="" />
                <div>
                <p className='text-xl'>Alte Cruise</p>
                <p className='text-gray-300' >Spotify</p>
                <p>2:10:15</p>
                </div>
            </div>
        </div>
        </div>
        <SongList/>
        <SongList/>

    </div>
  )
}
