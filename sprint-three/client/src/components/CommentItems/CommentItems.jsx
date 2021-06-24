import './CommentItems.scss';

import { Component } from 'react';
import axios from 'axios';

import Avatar from '../Avatar/Avatar';

import { timeAgo } from '../../utils/timeAgo';
import deleteIcon from '../../assets/icons/Icon-delete.svg';

class CommentItems extends Component {

    // Deletes the comment from the API and displays the page again without the comment
    handleClick = (commentId) => {
        axios.delete(`/videos/${this.props.selectedEntry.id}/comments/${commentId}`)
        .then(() => {
            this.props.getVideoDetails(this.props.selectedEntry.id);
        })
        .catch(err => {
            alert("Oops! Something happened: ", err);
        })
    }
    
    render() {
        const { comments } = this.props.selectedEntry;
        return (
            <>
            {comments
            .sort((a, b) => {
            return b.timestamp - a.timestamp;
            })
            .map(comment => {
                return (
                    <article className="comment" key={comment.id}>
                        <div className="comment__left">
                            {comment.name === "Laurie Villeton" ? (<Avatar />) : (
                                <div className="avatar-container"></div>
                            )}
                        </div>
                        <div className="comment__right">
                            <div className="comment__right-top">
                                <h3 className="comment__name">{comment.name}</h3>
                                <p className="comment__timestamp">{timeAgo(comment.timestamp)}</p>
                            </div>
                            <div className="comment__right-bottom">
                                <p className="comment__text">{comment.comment}</p>
                            </div>
                            <div className="comment__right-buttons">
                                <img onClick={() => this.handleClick(comment.id)} className="comment__like-btn" src={deleteIcon} alt="Delete Icon" />
                            </div>
                        </div>
                    </article>    
                )
            })}
            </>
        )
    }
}

export default CommentItems;

