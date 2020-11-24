import React from 'react';
import styles from './view.module.css';

const View = ({video}) => {
  return (
    <div className={styles['video-view']}>
      <div className={styles['video-player']}>
        <iframe className={styles['player']} type="text/html" src={`//www.youtube.com/embed/${video.id}?enablejsapi=1&origin=http://example.com`} frameBorder="0"></iframe>
      </div>
      <div className={styles['video-info']}>
        <h2 className={styles['video-title']}>{video.snippet.title}</h2>
        <pre className={styles['video-desc']}>{video.snippet.description}</pre>
      </div>
    </div>
  );
};

export default View;