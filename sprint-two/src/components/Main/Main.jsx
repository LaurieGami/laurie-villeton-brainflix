import './Main.scss';

import Hero from '../Hero/Hero';
import SelectedMediaInfo from '../SelectedMediaInfo/SelectedMediaInfo';
import MediaList from '../MediaList/MediaList';

const Main = ({videos, videoDetails, match, defaultVideoId}) => {
    let videoId;
    !!defaultVideoId ? videoId = defaultVideoId : videoId = match.params.videoId;
    const selectedVideo = videoDetails.find(video => video.id === videoId);

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

export default Main;