import React from "react";
import "./VideoFooter.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MusicNoteIcon from '@material-ui/icons/MusicNote';


function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
          <h3>@chachan010399</h3>
          <p> this is a description</p>
        <MusicNoteIcon/>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
