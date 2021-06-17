import './MainPage.scss';

import { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/utils';
import { API_KEY } from '../../utils/utils';

import Hero from '../../components/Hero/Hero';
import SelectedMediaInfo from '../../components/SelectedMediaInfo/SelectedMediaInfo';
import MediaList from '../../components/MediaList/MediaList';

class MainPage extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    getVideos = () => {
        axios.get(`${API_URL}/videos?api_key=${API_KEY}`)
            .then(res => {
                this.setState({
                    videos: res.data,
                })
            })
            .catch(err => {
                console.log('Oops', err)
            })
    }

    getVideoDetails = (videoId) => {
        axios.get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
            .then(res => {
                this.setState({
                    selectedVideo: res.data
                })
            })
            .catch(err => {
                console.log('Agrrrrh', err);
            })
    }

    componentDidMount() {
        this.getVideos();

        const { videoId } = this.props.match.params;

        if (!!videoId) {
            this.getVideoDetails(videoId);
        } else {
            this.getVideoDetails(this.state.videos[0])
        }
        console.log(!!videoId);
        console.log(this.state);
        // let selectedVideoId;
        // !!videoId ? selectedVideoId = videoId : selectedVideoId = this.state.videos[0];
        // let videoId;
        // !!defaultVideoId ? videoId = defaultVideoId : videoId = match.params.videoId;
        // const selectedVideo = videoDetails.find(video => video.id === videoId);
        
    }

    componentDidUpdate(prevProps) {
        const { videoId } = this.props.match.params;

        if (videoId !== prevProps.match.params.videoId) {
            this.getVideoDetails(videoId);
        }

    }

    // const selectedVideo = videoDetails.find(video => video.id === videoId);
    
    render() {
        const { videos, selectedVideo } = this.state;

        if (this.state.selectedVideo === null) {
            return <h2>Loading...</h2>
        }
        
        return (
            <main className="main">
                <Hero selectedEntry={selectedVideo} />
                <section className="main__container">
                    <SelectedMediaInfo selectedEntry={selectedVideo} />
                    <MediaList entries={videos.filter(video => video.id !== selectedVideo.id)} />
                </section>
            </main>
        )
    }
}

export default MainPage;