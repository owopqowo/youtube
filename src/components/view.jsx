import React, { Component } from 'react';
import styles from './view.module.css';

class View extends Component {
  render() {
    let videoId = this.props.video.id.videoId;
    videoId ? videoId = this.props.video.id.videoId : videoId = this.props.video.id;
    return (
      <div className={styles['video-view']}>
        <div className={styles['video-player']}>
          <iframe id="player" type="text/html" src={`//www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`} frameBorder="0"></iframe>
        </div>
        <div className={styles['video-info']}>
          <h2 className={styles['video-title']}>{this.props.video.snippet.title}</h2>
          <p className={styles['video-desc']}>{this.props.video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default View;