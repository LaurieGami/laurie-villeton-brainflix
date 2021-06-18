import './CommentItems.scss';
import Avatar from '../Avatar/Avatar';
import { Component } from 'react';
import axios from 'axios';

import { API_URL, API_KEY } from '../../utils/utils';

// Calculate how long ago was the comment posted
const timeAgo = (timestamp) => {
    let date = new Date(timestamp);
    let today = new Date();
    let seconds = Math.round((today - date) / 1000);
    let minutes = Math.round(seconds / 60);
    let hours = Math.round(minutes / 60);

    if (seconds < 10) {
        return `Now`;
    } else if (seconds < 60) {
        return `${seconds} seconds ago`
    } else if (seconds < 90) {
        return `A minute ago`
    } else if (minutes < 60) {
        return `${minutes} minutes ago`
    } else if (hours < 2) {
        return `An hour ago`
    } else if (hours < 24) {
        return `${hours} hours ago`
    } else {
        return timestampToDate(timestamp)
    }
}

// Transform timestamp in a date format MM/DD/YYYY
const timestampToDate = (timestamp) => {
    let date = new Date(timestamp);
    
    let dd = date.getDate();
    let mm = date.getMonth()+1; 
    let yyyy = date.getFullYear();
    
    if (dd < 10) {
    dd = '0' + dd;
    } 

    if (mm < 10) {
    mm = '0' + mm;
    }

    return date = mm+'/'+dd+'/'+yyyy;
}

class CommentItems extends Component {

    handleClick = (commentId) => {
        axios.delete(`${API_URL}/videos/${this.props.selectedEntry.id}/comments/${commentId}?api_key=${API_KEY}`)
        .then(res => {
            console.log(res);
            this.props.getVideoDetails(this.props.selectedEntry.id);
        })
        .catch(err => {
            console.log(err);
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
                            <h3 className="comment__name">{comment.name}</h3>
                            <p className="comment__timestamp">{timeAgo(comment.timestamp)}</p>
                            <p className="comment__text">{comment.comment}</p>
                        </div>
                        <button onClick={() => this.handleClick(comment.id)}>Delete</button>
                    </article>    
                )
            })}
            </>
        )
    }
}

export default CommentItems;

