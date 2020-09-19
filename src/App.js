import React, { useState ,useEffect} from 'react';
import './App.css';
import Video from './Video'
import db from './firebase'

function App() {
const [videos,setVideos]=useState([])
// kích hoạt tải
useEffect(()=>{
  db.collection('videos').onSnapshot(snapshot=>(
    setVideos(snapshot.docs.map(doc=>doc.data()))
  ))
},[videos])
  return (
    <div className="app">
        <h1 className="copyRight">TikTok by ThuongNguyen</h1>
        <div className="app__videos">
          {videos.map(({url, channel, description, song, likes, messages, shares})=>(
            <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
            />
          ))}
        </div>
    </div>
  );
}

export default App;
