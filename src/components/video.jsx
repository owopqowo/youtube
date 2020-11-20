import React, { PureComponent } from 'react';
import styles from './videos.module.css';

class Video extends PureComponent {
  handleView = () => {
    this.props.onView(this.props.video);
  }
  render() {
    return (
      <li className={styles.video} onClick={this.handleView}>
        <img src={this.props.video.snippet.thumbnails.high.url} alt="" className={styles['video-thumb']} />
        <h2 className={styles['video-title']}>{this.props.video.snippet.title}</h2>
        <p className={styles['video-desc']}>{this.props.video.snippet.description}</p>
      </li>
    );
  }
}

export default Video;