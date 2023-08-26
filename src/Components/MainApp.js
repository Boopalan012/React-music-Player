import React, { useState } from "react";
import ReactPlayer from "react-player";
import AudioPlayer from "./AudioPlayer";
import SongList from "./SongList";
import audioFile from "../Audio/Tom_Odell_-_Another_Love.mp3";

const MainApp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(500);
  const [currentTime, setCurrentTime] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);
  const [isSeeking,setIsSeeking]=useState();

  

  const audioFiles = [
    { songNo: 1, name: "Fall in other Love", url: audioFile },
    { songNo: 2, name: "Next Love", url: audioFile },
    { songNo: 3, name: "Last", url: audioFile },
  ];
  const [selectedSong, setSelectedSong] = useState(audioFiles[0]);

  const playClick = () => {
    setIsPlaying(!isPlaying);
  };

  const nextClick = () => {
    let key = selectedSong.songNo;
    key = key - 1;
    if (audioFiles.length - 1 === key) {
      key = audioFiles.length - 1 - 1;
    }
    setSelectedSong(audioFiles[key + 1]);
  };

  const prevClick = () => {
    let key = selectedSong.songNo;
    key = key - 1;
    if (key === 0) {
      key = key + 1;
    }
    setSelectedSong(audioFiles[key - 1]);
  };

  const changeVolume = (newVolume) => {
    setVolume(newVolume);
  };

  const handleDuration=(duration)=>{
    setDuration(duration);
  }
  const handleCurrentTime=(duration)=>{
    // set(duration);
  }
  const timeChange=(newValue)=>{
    setPlayed(newValue)

  }

  const seekChangeStart = () => {
    setIsSeeking(true);
  };

  const seekChangeCommited = () => {
    setIsSeeking(false);

  }


  

  return (
    <>
     <ReactPlayer
        url={selectedSong.url}
        playing={isPlaying}
        controls={false}
        volume={volume / 1000}
        onDuration={handleDuration}
        onProgress={(progress) => {
          setPlayed(progress.playedSeconds);
          if (!isSeeking) {
            setSeekTime(progress.playedSeconds);
          }
        }}
        onSeek={() => setIsSeeking(false)}
        seek={seekTime}
      />

      <SongList audioFiles={audioFiles} onPlayPause={playClick} />

      <AudioPlayer
        playClick={playClick}
        prevClick={prevClick}
        nextClick={nextClick}
        selectedSong={selectedSong}
        volume={volume}
        changeVolume={changeVolume}
        currentTime={currentTime}
        duration={duration}
        played={played}
        timeChange={timeChange}
      />
        

    </>
  );
};

export default MainApp;



// import React, { useState } from 'react';

// function SongPlayer() {
//   const [duration, setDuration] = useState(75); // Initial duration in seconds
//   const [playedPercentage, setPlayedPercentage] = useState(73.1); // Initial played percentage

//   const handleChangeDuration = (newDuration) => {
//     const currentPlayedTime = (playedPercentage / 100) * duration;
//     const newPlayedPercentage = (currentPlayedTime / newDuration) * 100;

//     setDuration(newDuration);
//     setPlayedPercentage(newPlayedPercentage);
//   };

//   return (
//     <div>
//       <p>Duration: {duration} seconds</p>
//       <p>Played Percentage: {playedPercentage.toFixed(2)}%</p>
//       <button onClick={() => handleChangeDuration(120)}>Change Duration to 2 minutes</button>
//       {/* Other components for the song player */}
//     </div>
//   );
// }

// export default SongPlayer;
