import React, { useEffect, useState } from 'react';
import Header from './components/header/header';
import Videos from './components/videos/videos';
import View from './components/view/view';
import './app.css';

const App = ({youtube}) => {
  const [view, setView] = useState({state: false, video: {}});
  const [videos, setVideos] = useState([]);
  const isView = view.state;

  useEffect(()=>{
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  const search = query => {
    youtube
      .search(query)
      .then(videos => {
        const view = {
          state : false,
          video: {}
        }
        setVideos(videos);
        setView(view);
      });
  }


  const handleView = (videoObj) => {
    const view = {
      state : true,
      video: videoObj
    }
    window.scrollTo(0, 0);
    setView(view);
  }

  return (
    <>
      <Header onSearch={search}/>
      {isView && <View video={view.video} />}
      <Videos videos={videos} onView={handleView} />
    </>
  );
};

export default App;
