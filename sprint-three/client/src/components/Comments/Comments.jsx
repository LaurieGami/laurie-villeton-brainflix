import './Comments.scss';
import { Component } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import CommentItems from '../CommentItems/CommentItems';

class Comments extends Component {

    render () {
        const { selectedEntry, getVideoDetails } = this.props;
        const { comments } = selectedEntry;
        return (
            <section className="comments">
                <h2 className="comments__count">{comments.length} Comments</h2>
                <section className="comments__form">
                    <CommentForm selectedEntry={selectedEntry} getVideoDetails={getVideoDetails} />
                </section>
                {/* <!-- =============== Comment Container =============== --> */}
                <section id="comment-container" className="comments__container">
                    {/* <!-- This is where the comments will appear --> */}
                    <CommentItems selectedEntry={selectedEntry} getVideoDetails={getVideoDetails} />
                </section>
            </section>
        )
    }
}

export default Comments;
