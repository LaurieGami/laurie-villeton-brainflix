import './Comments.scss';
import CommentForm from '../CommentForm/CommentForm';
import CommentItem from '../CommentItem/CommentItem';

function Comments() {
    return (
        <section className="comments">
            <h2 className="comments__count">3 Comments</h2>
            <section className="comments__form">
                <CommentForm />
            </section>
            {/* <!-- =============== Comment Container =============== --> */}
            <section id="comment-container" className="comments__container">
                {/* <!-- This is where the comments will appear --> */}
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </section>
        </section>

    )
}

export default Comments;
