import React, { memo } from 'react';
import styles from './video.module.css';

const Video = memo((props) => {
  const handleView = () => {
    props.onView(props.video);
  }
  return (
    <li className={`${styles.video} ${props.display === 'card' ? styles.card : ''}`} onClick={handleView}>
      <img src={props.video.snippet.thumbnails.medium.url} alt="" className={styles['video-thumb']}/>
      <small className={styles['video-channel']}>{props.video.snippet.channelTitle}</small>
      <h2 className={styles['video-title']}>{props.video.snippet.title}</h2>
      <p className={styles['video-desc']}>{props.video.snippet.description}</p>
    </li>
  )
});



export default Video;