import { Card, CardActions, CardContent, IconButton, Slider, Typography } from '@mui/material';
import { PlayArrow, SkipPrevious, SkipNext, Loop, VolumeUp } from '@mui/icons-material';

import React from 'react';

const AudioPlayer = (props) => {
  const cardStyles = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 999,
  };

  const controlBarStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  console.log('ee',props);

  return (
    <Card style={cardStyles}>
      <CardContent>
        <Typography variant="h6">{props.selectedSong.name}</Typography>
        <Typography variant="body2">Artist Name</Typography>
        {formatTime(props.played)} / {formatTime(props.duration)}
      </CardContent>
      <CardActions>
        <IconButton aria-label="previous" onClick={props.prevClick}>
          <SkipPrevious />
        </IconButton>
        <IconButton aria-label="play/pause" onClick={props.playClick}>
          <PlayArrow />
        </IconButton>
        <IconButton aria-label="next" onClick={props.nextClick}>
          <SkipNext />
        </IconButton>
        <IconButton aria-label="loop">
          <Loop />
        </IconButton>
        <Slider
          sx={{ flexGrow: 1 }}
          value={props.played}
          min={0}
          max={props.duration}
          onChange={(e,newValue)=>(props.timeChange(newValue))}
          
          
        />
        <div style={controlBarStyles}>
          <Slider
            sx={{ height: '100px' }}
            value={props.volume}
            onChange={(e, newValue) => props.changeVolume(newValue)}
            min={1}
            max={1000}
            orientation="vertical"
          />
          <IconButton aria-label="volume">
                    <VolumeUp />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

export default AudioPlayer;

