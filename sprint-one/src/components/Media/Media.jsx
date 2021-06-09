import './Media.scss';
import viewsIcon from '../../assets/icons/Icon-views.svg';
import likesIcon from '../../assets/icons/Icon-likes.svg';
import Comments from "../Comments/Comments";

function Media() {
    return (
        <article className="media">
            <section className="media__hero">
                <video className="media__video" width="320" height="240" controls>
                    <source src="https://i.imgur.com/l2Xfgpl.jpg" />
                    Your browser does not support the video tag.
                </video>
            </section>
            <section className="media__info">
                <h1 className="media__title">BMX Rampage: 2018 Highlights</h1>
                <div className="media__subtitles">
                    <div className="media__top">
                        <h2 className="media__channel">By Red Cow</h2>
                        <p className="media__timestamp">12/18/2018</p>
                    </div>
                    <div className="media__bottom">
                        <div className="media__stats">
                            <img className="media__icon" src={viewsIcon} alt="Views Icon"/>
                            <p className="media__number">1,001,023</p>
                        </div>
                        <div className="media__stats">
                            <img className="media__icon" src={likesIcon} alt="Likes Icon"/>
                            <p className="media__number">110,985</p>
                        </div>
                    </div>
                </div>
                <p className="media__description">
                On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title
                </p>
            </section>
            <section className="media__comments">
                <Comments />
            </section>
        </article>
    )
}

export default Media;