import React, { useEffect, useState } from 'react';
import Header from './components/header/header';
import Videos from './components/videos/videos';
import View from './components/view/view';
import './app.css';

const App = () => {
  const [view, setView] = useState({state: false, video: {}});
  const [videos, setVideos] = useState([]);
  const isView = view.state;

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=KR&key=AIzaSyCnXw5Ly5cEEfOe7h8-E4CgnfGoJjYPnAA", requestOptions)
      .then(response => response.json())
      .then(data => {
        setVideos(data.items);
      })
      .catch(error => console.log('error', error));
  }, []);


  const handleView = (videoObj) => {
    const view = {
      state : true,
      video: videoObj
    }
    window.scrollTo(0, 0);
    setView(view);
  }

  const hendleSearch = ((word) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&type=playlist&q=${word}&key=AIzaSyCnXw5Ly5cEEfOe7h8-E4CgnfGoJjYPnAA`, requestOptions)
      .then(response => response.json())
      .then(data => {
        const videos = data.items.map(video => {
          return video;
        });
        const view = {
          state : false,
          video: {}
        }
        setView(view);
        setVideos(videos);
      })
      .catch(error => console.log('error', error));
  });

  return (
    <>
      <Header onSearch={hendleSearch}/>
      {isView && <View video={view.video} />}
      <Videos videos={videos} onView={handleView} />
    </>
  );
};

export default App;
