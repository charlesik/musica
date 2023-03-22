import React, { useState, useEffect } from "react";

export default function SongList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://musica-api.up.railway.app/popular")
      .then((res) => res.json())
      .then((data) => setSongs(data));
  }, []);
  console.log(songs);
  const topCharts = songs.map((song, index) => {
    return (
      <div>
        <img src={song.cover} alt="" className="w-[153px] h-[153px]" />
        <p>{song.title}</p>
      </div>
    );
  });
  return (
    <div>
      <p>Song List</p>
      <div className="flex justify-evenly">
        {topCharts}
        
      </div>
    </div>
  );
}
