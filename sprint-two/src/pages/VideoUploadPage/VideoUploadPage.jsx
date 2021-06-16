import './VideoUploadPage.scss';
import { Link } from 'react-router-dom';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';

const VideoUploadPage = () => {
    return (
        <article className="upload-video">
            <h1 className="upload-video__title">Upload Video</h1>
            <form className="upload-form">
                <div className="upload-form__container">
                    <div className="upload-form__thumbnail">
                        <label htmlFor="videoThumbnail" className="upload-form__label">Video thumbnail</label>
                        {/* img and div to be replaced by a file input tag */}
                        <div className="upload-form__input-img-container">
                            <img src={thumbnail} className="upload-form__input-img" />
                        </div>
                    </div>
                    <div className="upload-form__info">
                        <label htmlFor="videoTitle" className="upload-form__label">Title your video</label>
                        <input type="text" id="video-title" name="videoTitle" className="upload-form__input-txt" placeholder="Add a title to your video" />
                        
                        <label htmlFor="videoDescription" className="upload-form__label">Add a video description</label>
                        <textarea id="video-description" name="videoDescription" className="upload-form__textarea" placeholder="Add a description of your video"></textarea>
                    </div>
                </div>
                <div className="upload-form__links">
                    <button id="upload-btn" className="upload-form__publish-btn">Publish</button>
                    <Link to="/" className="upload-form__cancel-link">Cancel</Link>
                </div>
            </form>
        </article>
    );
}

export default VideoUploadPage;