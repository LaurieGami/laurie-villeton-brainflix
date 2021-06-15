import './SelectedMediaInfo.scss';
import viewsIcon from '../../assets/icons/Icon-views.svg';
import likesIcon from '../../assets/icons/Icon-likes.svg';
import Comments from "../Comments/Comments";

// Calculate how long ago was the video posted
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

function SelectedMediaInfo ({selectedEntry}) {
    return (
        <article className="selected-media">
            <section className="selected-media__info">
                <h1 className="selected-media__title">{selectedEntry.title}</h1>
                <div className="selected-media__subtitles">
                    <div className="selected-media__top">
                        <h2 className="selected-media__channel">By {selectedEntry.channel}</h2>
                        <p className="selected-media__timestamp">{timeAgo(selectedEntry.timestamp)}</p>
                    </div>
                    <div className="selected-media__bottom">
                        <div className="selected-media__stats">
                            <img className="selected-media__icon" src={viewsIcon} alt="Views Icon"/>
                            <p className="selected-media__number">{selectedEntry.views}</p>
                        </div>
                        <div className="selected-media__stats">
                            <img className="selected-media__icon" src={likesIcon} alt="Likes Icon"/>
                            <p className="selected-media__number">{selectedEntry.likes}</p>
                        </div>
                    </div>
                </div>
                <p className="selected-media__description">
                    {selectedEntry.description}
                </p>
            </section>
            <section className="selected-media__comments">
                <Comments comments={selectedEntry.comments}/>
            </section>
        </article>
    )
}

export default SelectedMediaInfo;