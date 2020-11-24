import React, { useEffect, useState } from 'react';
import Header from './components/header/header';
import Videos from './components/videos/videos';
import View from './components/view/view';
import styles from './app.module.css';

const App = ({youtube}) => {
  const [view, setView] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  const search = query => {
    youtube
      .search(query)
      .then(videos => {
        setVideos(videos);
        setView(null);
      });
  }

  const handleView = (videoObj) => {
    window.scrollTo(0, 0);
    setView(videoObj);
  }

  return (
    <>
      <Header onSearch={search}/>
      <main className={styles['video-container']}>
        {view && 
          <section className={styles['video-view']}><View video={view} /></section>
        }
        <section className={styles['video-list']}><Videos videos={videos} onView={handleView} display={view || 'card'} /></section>
      </main>
    </>
  );
};

export default App;
