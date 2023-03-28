
export default function SongList(props) {
  
  const topCharts = props.songs.map((song, index) => {
    return (
      <div className="h-[153px] w-[153px] min-w-[153px] m-5" key={index}>
        <img src={song.cover} alt="" className="w-[153px] h-[153px] rounded-3xl" />
        <p>{song.title}</p>
      </div>
    );
  });
  
  return (
    <div className="">
      <p>{props.list}</p>
      <div className="bar flex justify-around overflow-x-auto h-[220px]">
        {topCharts}
      </div>
    </div>
  );
}
