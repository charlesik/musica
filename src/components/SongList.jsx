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
      <div className="h-[153px] w-[153px] min-w-[153px] m-5">
        <img src={song.cover} alt="" className="w-[153px] h-[153px] rounded-3xl" />
        <p>{song.title}</p>
      </div>
    );
  });
  return (
    <div className="">
      <p>New Releases</p>
      <div className="bar flex justify-around overflow-x-auto h-[220px]">
        {topCharts}
        
      </div>
    </div>
  );
}
