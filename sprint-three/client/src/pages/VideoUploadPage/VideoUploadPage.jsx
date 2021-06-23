import './VideoUploadPage.scss';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { Component } from 'react';
import axios from 'axios';

class VideoUploadPage extends Component {
    state = {
        id: "",
        title: "",
        channel: "",
        image: "",
        description: "",
        views: "",
        likes: "",
        duration: "",
        video: "",
        timestamp: "",
        comments: [],
    }

    // Makes a copy of the initial state to reset the form once submitted
    initialState = this.state;

    // Updates the state as we type in text in the video input form
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // Makes sure we have all the info to submit video to the API
    isFormValid = () => {
        if (!this.state.title || !this.state.description) {
            return false;
        }
        return true;
    }
    
    // Submits the new video to the API and displays it on the page
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.isFormValid()) {
            axios.post(`/videos`, {
                id: uuid(),
                title: this.state.title,
                channel: "Laurie Villeton",
                image: "/images//Upload-video-preview.jpg",
                description: this.state.description,
                views: "0",
                likes: "0",
                duration: "4:01",
                video: "https://project-2-api.herokuapp.com/stream",
                timestamp: Date.now(),
                comments: [],
            })
            .then(res => {
                alert(`Video "${res.data.title}" has been submitted`);
                this.setState(this.initialState);
            })
            .catch(err => alert("Oops! Something happened: ", err))
        } else {
            alert("Please submit a video title and description");
        }
    }

    render() {
        return (
            <article className="upload-video">
                <h1 className="upload-video__title">Upload Video</h1>
                <form className="upload-form" onSubmit={this.handleSubmit}>
                    <div className="upload-form__container">
                        <div className="upload-form__thumbnail">
                            <label htmlFor="videoThumbnail" className="upload-form__label">Video thumbnail</label>
                            {/* img and div to be replaced by a file input tag */}
                            <div className="upload-form__input-img-container">
                                <img src="/images/Upload-video-preview.jpg" className="upload-form__input-img" alt="Video Upload Thumbnail" />
                            </div>
                        </div>
                        <div className="upload-form__info">
                            <label htmlFor="title" className="upload-form__label">Title your video</label>
                            <input onChange={this.handleChange} value={this.state.title} type="text" id="video-title" name="title" className="upload-form__input-txt" placeholder="Add a title to your video" />
                            
                            <label htmlFor="description" className="upload-form__label">Add a video description</label>
                            <textarea onChange={this.handleChange} value={this.state.description} id="video-description" name="description" className="upload-form__textarea" placeholder="Add a description of your video"></textarea>
                        </div>
                    </div>
                    <div className="upload-form__links">
                        <button id="upload-btn" className="upload-form__publish-btn" type="submit">Publish</button>
                        <Link to="/" className="upload-form__cancel-link">Cancel</Link>
                    </div>
                </form>
            </article>
        )
    }
}

export default VideoUploadPage;