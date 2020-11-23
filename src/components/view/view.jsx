import React from 'react';
import styles from './view.module.css';

const View = (props) => {
  return (
    <div className={styles['video-view']}>
      <div className={styles['video-player']}>
        <iframe id="player" type="text/html" src={`//www.youtube.com/embed/${props.video.id}?enablejsapi=1&origin=http://example.com`} frameBorder="0"></iframe>
      </div>
      <div className={styles['video-info']}>
        <h2 className={styles['video-title']}>{props.video.snippet.title}</h2>
        <p className={styles['video-desc']}>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default View;