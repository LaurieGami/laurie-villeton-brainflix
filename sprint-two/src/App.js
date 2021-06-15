import './App.scss';

import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import videos from './data/videos.json';
import videoDetails from './data/video-details.json';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import VideoDetails from './components/VideoDetails';
import VideoUpload from './components/VideoUpload';

class App extends Component {
  state = {
    videos: videos,
    videoDetails: videoDetails,
    selectedEntry: videoDetails[0]
  }

  render () {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={routeProps =>
              <Main 
                videos={this.state.videos} 
                videoDetails={this.state.videoDetails} 
                selectedEntry={this.state.selectedEntry} 
                {...routeProps}
              />
            } 
          />
          <Route 
            exact  
            path="/:videoId" 
            render={routeProps => <VideoDetails 
              videos={this.state.videos} 
              videoDetails={this.state.videoDetails} 
              selectedEntry={this.state.selectedEntry} 
              {...routeProps}
              />
            } 
          />
          <Route exact path="/VideoUpload" component={VideoUpload} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
