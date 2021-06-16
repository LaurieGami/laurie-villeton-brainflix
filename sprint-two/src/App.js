import './App.scss';

import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import videos from './data/videos.json';
import videoDetails from './data/video-details.json';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import VideoUpload from './components/VideoUpload';

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
            return <Main 
                      videos={this.state.videos} 
                      videoDetails={this.state.videoDetails}
                      defaultVideoId={this.state.videos[0].id}
                      {...routeProps}
                    />
          }} 
          />
          <Route exact path="/videos/:videoId" render={routeProps => {
            return <Main 
                      videos={this.state.videos} 
                      videoDetails={this.state.videoDetails}
                      {...routeProps}
                    />
          }} 
          />
          <Route exact path="/VideoUpload" component={VideoUpload} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
