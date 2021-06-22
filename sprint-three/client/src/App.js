import './App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';

const App = () => {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/videos/:videoId" component={MainPage} />
          <Route exact path="/videoupload" component={VideoUploadPage} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
