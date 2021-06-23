import './MainPage.scss';

import { Component } from 'react';
import axios from 'axios';

import Hero from '../../components/Hero/Hero';
import SelectedMediaInfo from '../../components/SelectedMediaInfo/SelectedMediaInfo';
import MediaList from '../../components/MediaList/MediaList';

class MainPage extends Component {
    state = {
        videos: [],
        selectedVideo: null,
        selectedVideoId: null,
    }

    // Gets the basic info for all the videos
    getVideos = () => {
        axios.get(`/videos`)
            .then(res => {
                this.setState({
                    videos: res.data,
                    selectedVideoId: res.data[0].id
                })
            })
            .catch(err => {
                console.log('Oops', err)
            })
    }

    // Gets the detailed info for a specific video via its id
    getVideoDetails = (videoId) => {
        axios.get(`/videos/${videoId}`)
            .then(res => {
                this.setState({
                    selectedVideo: res.data,
                    selectedVideoId: res.data.id
                })
            })
            .catch(err => {
                console.log('Agrrrrh', err);
            })
    }

    componentDidMount() {
        this.getVideos();
    }

    componentDidUpdate(_prevProps, prevState) {
        const videoId = this.props.match.params.videoId || this.state.videos[0].id;

        if (prevState.selectedVideoId !== videoId) {
            return this.getVideoDetails(videoId);
        }
    }
    
    render() {
        const { videos, selectedVideo } = this.state;

        if (this.state.selectedVideo === null) {
            return <h2>Loading...</h2>
        }
        
        return (
            <main className="main">
                <Hero selectedEntry={selectedVideo} />
                <section className="main__container">
                    <SelectedMediaInfo selectedEntry={selectedVideo} getVideoDetails={this.getVideoDetails}/>
                    <MediaList entries={videos.filter(video => video.id !== selectedVideo.id)} />
                </section>
            </main>
        )
    }
}

export default MainPage;