import './App.scss';

import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import videos from './data/videos.json';
import videoDetails from './data/video-details.json';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';

class App extends Component {
  state = {
    videos: videos,
    videoDetails: videoDetails
  }

  render () {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={routeProps => {
            return <MainPage 
                      videos={this.state.videos} 
                      videoDetails={this.state.videoDetails}
                      defaultVideoId={this.state.videos[0].id}
                      {...routeProps}
                    />
          }} 
          />
          <Route exact path="/videos/:videoId" render={routeProps => {
            return <MainPage 
                      videos={this.state.videos} 
                      videoDetails={this.state.videoDetails}
                      {...routeProps}
                    />
          }} 
          />
          <Route exact path="/videoupload" component={VideoUploadPage} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
