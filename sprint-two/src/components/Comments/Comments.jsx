import './Comments.scss';
import React from 'react';
import CommentForm from '../CommentForm/CommentForm';
import CommentItems from '../CommentItems/CommentItems';

class Comments extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render () {
        return (
            <section className="comments">
                <h2 className="comments__count">{this.props.comments.length} Comments</h2>
                <section className="comments__form">
                    <CommentForm handleSubmit={this.handleSubmit}/>
                </section>
                {/* <!-- =============== Comment Container =============== --> */}
                <section id="comment-container" className="comments__container">
                    {/* <!-- This is where the comments will appear --> */}
                    <CommentItems comments={this.props.comments} />
                </section>
            </section>
        )
    }
}

export default Comments;
