import './CommentForm.scss';
import Avatar from "../Avatar/Avatar";

import { Component } from 'react';
import axios from 'axios';

class CommentForm extends Component {
    state = {

    }
    
    render() {
        return (
            <form id="comment-form" className="form">
                <div className="form__personal-info">
                    <div className="form__avatar">
                        <Avatar />
                    </div>
                </div>
                <div className="form__container">
                    <div className="form__comment">
                        <label htmlFor="comment" className="form__label">Join the conversation</label>
                        <textarea id="comment" name="comment" className="form__textarea" placeholder="Write comment here"></textarea>
                    </div>
                    <button type="submit" id="comment-btn" className="form__btn">Comment</button>
                </div>
            </form>
        )
    }
}

export default CommentForm;
