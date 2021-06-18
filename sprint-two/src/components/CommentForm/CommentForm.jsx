import './CommentForm.scss';
import Avatar from "../Avatar/Avatar";

import { Component } from 'react';
import axios from 'axios';

import { API_URL, API_KEY } from '../../utils/utils';

class CommentForm extends Component {
    state = {
        name: "Laurie Villeton",
        comment: "",
    }

    initialState = this.state;

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    isFormValid = () => {
        if (!this.state.name || !this.state.comment) {
            return false;
        }
        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.isFormValid()) {
            axios.post(`${API_URL}/videos/${this.props.selectedEntry.id}/comments?api_key=${API_KEY}`, {
                name: this.state.name,
                comment: this.state.comment
            })
            .then(res => {
                console.log(res);
                this.props.getVideoDetails(this.props.selectedEntry.id);
                this.setState(this.initialState);
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            alert("Please write a comment");
        }
    }

    render() {
        return (
            <form id="comment-form" className="form" onSubmit={this.handleSubmit}>
                <div className="form__personal-info">
                    <div className="form__avatar">
                        <Avatar />
                    </div>
                </div>
                <div className="form__container">
                    <div className="form__comment">
                        <label htmlFor="comment" className="form__label">Join the conversation</label>
                        <textarea onChange={this.handleChange} value={this.state.comment} id="comment" name="comment" className="form__textarea" placeholder="Write comment here"></textarea>
                    </div>
                    <button type="submit" id="comment-btn" className="form__btn">Comment</button>
                </div>
            </form>
        )
    }
}

export default CommentForm;
