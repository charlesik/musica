import React from "react";
import SongList from "./SongList";
import TopBar from "./TopBar";
import { useState, useEffect } from "react";

export default function Home() {
  const [songs, setSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [playlist, setPlaylist] = useState([]);


  useEffect(() => {
    fetch("https://musica-api.up.railway.app/new")
      .then((res) => res.json())
      .then((data) => setSongs(data));
  }, []);
  useEffect(() => {
    fetch("https://musica-api.up.railway.app/popular")
      .then((res) => res.json())
      .then((data) => setPopSongs(data));
  }, []);
  useEffect(() => {
    fetch("https://musica-api.up.railway.app/playlist")
      .then((res) => res.json())
      .then((data) => setPlaylist(data));
  }, []);
  console.log(playlist)

  const playlists = playlist.slice(3).map((playlist,index) => {
    return (
      <div className="bg-[#1A1E1F] flex h-[96px] w-[417px] p-2 justify-around rounded-2xl mb-3" key={index}>
        <img src={playlist.cover} alt="" />
        <div>
          <p className="text-xl">{playlist.title}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full text-white ml-24 max-w-[92%]">
      <TopBar />
      <div className="flex justify-around  w-full">
        <div className="bg-[#609EAF] h-[373px] w-[686px] rounded-3xl flex text-white">
          <div className="w-1/2 pl-10 flex flex-col justify-around">
            <p>Currated Playlist</p>
            <div>
              <p className="text-3xl font-bold">Hits</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
            <p>33k Likes</p>
          </div>
          <div className="pl-10">
            <img src="kdot.png" alt="" className="max-h-full" />
          </div>
        </div>

        <div className="text-white">
          <p className="text-2xl">Top Playlists</p>
          <br />
          {playlists}
        </div>
      </div>
      <SongList songs={songs} list="New Releases" />
      <SongList songs={popSongs} list="Popular Releases" />
    </div>
  );
}
