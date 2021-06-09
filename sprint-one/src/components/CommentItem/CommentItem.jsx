import './CommentItem.scss';
import Avatar from '../Avatar/Avatar';

function CommentItem() {
    return (
        <article class="comment">
            <div class="comment__left">
                <Avatar />
            </div>
            <div class="comment__right">
                <h3 class="comment__name">Micheal Lyons</h3>
                <p class="comment__timestamp">12/18/2018</p>
                <p class="comment__text">They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.</p>
            </div>
        </article>
    )
}

export default CommentItem;

