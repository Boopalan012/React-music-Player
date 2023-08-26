import React from 'react';
import { Card, CardContent, CardActions, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';

const SongList = (props) => {
  const handlePlayPause = (url) => {
    props.onPlayPause(url);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Song Playlist</Typography>
        <List>
          {props.audioFiles.map((file, index) => (
            <ListItem key={index} button onClick={() => handlePlayPause(file.url)}>
              <ListItemText primary={file.name} />
              <IconButton aria-label="play/pause">
                {props.isPlaying? <Pause /> : <PlayArrow />}
              </IconButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        {/* Add any card actions here */}
      </CardActions>
    </Card>
  );
};

export default SongList;
