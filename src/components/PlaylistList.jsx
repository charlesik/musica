import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function PlaylistList() {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    fetch("https://musica-api.up.railway.app/playlist")
      .then((res) => res.json())
      .then((data) => setPlaylist(data));
  }, []);
  const playlistList = playlist.map((play,index) => {
    return (
      <Link to={`/chart/${play.title}`}key={index}><div  className="m-5">
        <img src={play.cover} alt="" className="w-[213px] h-[234px] rounded-3xl" />
      </div></Link>
    );
  });

  return <div className="mt-5 flex flex-wrap">{playlistList}</div>;
}
