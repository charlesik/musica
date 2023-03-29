import React from 'react'
import PlaylistList from './PlaylistList'
import TopBar from './TopBar'

export default function Playlists() {
  

  return (
    <div className='ml-24'>
        <TopBar/>
        <div className='mt-20'>
            <button className='border rounded-3xl mx-1 h-[36px] px-4 text-gray-500'>My Collection</button>
            <button className='border rounded-3xl mx-1 h-[36px] px-4 text-gray-500'>Likes</button>
        </div>
        <PlaylistList/>
    </div>
  )
}
