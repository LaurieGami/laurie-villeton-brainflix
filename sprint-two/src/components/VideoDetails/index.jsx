import './VideoDetails.scss';

import Hero from '../Hero/Hero';
import SelectedMediaInfo from '../SelectedMediaInfo/SelectedMediaInfo';
import MediaList from '../MediaList/MediaList';

const VideoDetails = (props) => {
    const videoId = props.match.params.videoId;
    const selectedVideo = props.videoDetails.find(video => video.id === videoId);

    return (
        <main className="main">
            <Hero selectedEntry={selectedVideo} />
            <section className="main__container">
                <SelectedMediaInfo selectedEntry={selectedVideo} />
                <MediaList entries={props.videos.filter(video => video.id !== selectedVideo.id)} />
            </section>
        </main>
    )
}

export default VideoDetails;