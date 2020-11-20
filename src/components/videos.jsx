import React, { Component } from 'react';
import Video from './video';
import styles from './videos.module.css';

class Videos extends Component {
  render() {
    return (
      <ul className={styles.videos}>
        {this.props.videos.map((video, index) => 
          <Video video={video} onView={this.props.onView} key={index} />
        )}
      </ul>
    );
  }
}

export default Videos;

