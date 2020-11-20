import React, { Component } from 'react';
import './app.css';
import Header from './components/header';
import View from './components/view';
import Videos from './components/videos';

class App extends Component {
  state = {
    view: {
      state: false,
      video: {}
    },
    videos: []
  }

  componentDidMount() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=KR&key=AIzaSyCnXw5Ly5cEEfOe7h8-E4CgnfGoJjYPnAA", requestOptions)
      .then(response => response.json())
      .then(data => {
        const videos = data.items.map(video => {
          return video;
        });
        this.setState({videos});
      })
      .catch(error => console.log('error', error));
  }

  hendleSearch = (word) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${word}&key=AIzaSyCnXw5Ly5cEEfOe7h8-E4CgnfGoJjYPnAA`, requestOptions)
      .then(response => response.json())
      .then(data => {
        const videos = data.items.map(video => {
          return video;
        });
        const view = {
          state : false,
          video: {}
        }
        console.log(videos);
        this.setState({view, videos});
      })
      .catch(error => console.log('error', error));
  }

  handleView = (videoObj) => {
    const view = {
      state : true,
      video: videoObj
    }
    window.scrollTo(0, 0);
    this.setState({view});
  }
  
  render() {
    const isView = this.state.view.state;
    return (
      <>
        <Header onSearch={this.hendleSearch}/>
        {isView && <View video={this.state.view.video} />}
        <Videos videos={this.state.videos} onView={this.handleView} />
      </>
    );
  }
}

export default App;
