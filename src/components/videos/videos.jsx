import React from 'react';
import Video from '../video/video';
import styles from './videos.module.css';

const Videos = (props) => (
  <ul className={styles.videos}>
    {props.videos.map((video, index) => 
      <Video video={video} key={index} onView={props.onView} />
    )}
  </ul>
);

export default Videos;

