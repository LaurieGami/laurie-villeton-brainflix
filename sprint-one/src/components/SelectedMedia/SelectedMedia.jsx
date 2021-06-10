import './SelectedMedia.scss';
import React from 'react';
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

class SelectedMedia extends React.Component {
    render () {
        return (
            <article className="main-media">
                <section className="main-media__hero">
                    <video className="main-media__video" controls poster={this.props.entry.image}>
                        <source src={this.props.entry.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </section>
                <section className="main-media__info">
                    <h1 className="main-media__title">{this.props.entry.title}</h1>
                    <div className="main-media__subtitles">
                        <div className="main-media__top">
                            <h2 className="main-media__channel">By {this.props.entry.channel}</h2>
                            <p className="main-media__timestamp">{timeAgo(this.props.entry.timestamp)}</p>
                        </div>
                        <div className="main-media__bottom">
                            <div className="main-media__stats">
                                <img className="main-media__icon" src={viewsIcon} alt="Views Icon"/>
                                <p className="main-media__number">{this.props.entry.views}</p>
                            </div>
                            <div className="main-media__stats">
                                <img className="main-media__icon" src={likesIcon} alt="Likes Icon"/>
                                <p className="main-media__number">{this.props.entry.likes}</p>
                            </div>
                        </div>
                    </div>
                    <p className="main-media__description">
                        {this.props.entry.description}
                    </p>
                </section>
                <section className="main-media__comments">
                    <Comments comments={this.props.entry.comments}/>
                </section>
            </article>
        )
    }
}

export default SelectedMedia;