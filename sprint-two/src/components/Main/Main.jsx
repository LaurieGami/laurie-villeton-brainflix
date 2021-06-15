import './Main.scss';

import Hero from '../Hero/Hero';
import SelectedMediaInfo from '../SelectedMediaInfo/SelectedMediaInfo';
import MediaList from '../MediaList/MediaList';

const Main = (props) => {
    const selectedVideo = props.selectedEntry;

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

export default Main;