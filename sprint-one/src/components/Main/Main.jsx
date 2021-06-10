import './Main.scss';
import React from 'react';
import videos from '../../data/videos.json';
import videoDetails from '../../data/video-details.json';
import Hero from '../Hero/Hero';
import SelectedMediaInfo from '../SelectedMediaInfo/SelectedMediaInfo';
import MediaList from '../MediaList/MediaList';

class Main extends React.Component {
    state = {
        videos: videos,
        videoDetails: videoDetails,
        selectedEntry: videoDetails[0]
    }

    clickHandler = (id) => {
        const individualEntry = this.state.videoDetails.find(entry => entry.id === id);
        this.setState({selectedEntry: individualEntry});
    };

    render () {
        return (
            <main className="main">
                <Hero entry={this.state.selectedEntry} />
                <section className="main__container">
                    <SelectedMediaInfo entry={this.state.selectedEntry} />
                    <MediaList entries={this.state.videos.filter(video => video.id !== this.state.selectedEntry.id)} clickHandler={this.clickHandler} />
                </section>            
            </main>
        )
    }
}

export default Main;