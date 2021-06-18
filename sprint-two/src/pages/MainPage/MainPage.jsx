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
        selectedVideoId: null,
    }

    getVideos = () => {
        axios.get(`${API_URL}/videos?api_key=${API_KEY}`)
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

    getVideoDetails = (videoId) => {
        axios.get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
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

    componentDidUpdate(prevProps) {
        // Solution A - Is jumping and keeps running on both Pages
        // const { videoId } = this.props.match.params;

        // let myVideoId;
        // !!videoId ? myVideoId = videoId : myVideoId = this.state.videos[0].id;

        // this.getVideoDetails(myVideoId);

        // console.log(myVideoId);

        // Solution B - Keeps running when on the Home Page: watch the console.log(this.state.selectedVideoId);
        const videoId = this.props.match.params.videoId || this.state.videos[0].id;

        if (videoId !== prevProps.match.params.videoId || videoId !== this.state.selectedVideoId) {
            console.log(this.state.selectedVideoId);
            this.getVideoDetails(videoId);
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
                    <SelectedMediaInfo selectedEntry={selectedVideo} />
                    <MediaList entries={videos.filter(video => video.id !== selectedVideo.id)} />
                </section>
            </main>
        )
    }
}

export default MainPage;