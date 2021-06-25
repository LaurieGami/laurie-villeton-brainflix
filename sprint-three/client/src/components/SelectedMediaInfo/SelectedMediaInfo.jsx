import './SelectedMediaInfo.scss';

import { Component } from 'react';
import axios from 'axios';

import viewsIcon from '../../assets/icons/Icon-views.svg';
import likesIcon from '../../assets/icons/Icon-likes.svg';

import Comments from "../Comments/Comments";
import { timeAgo } from '../../utils/timeAgo';

class SelectedMediaInfo extends Component {

    addLike = () => {
        axios.put(`/videos/${this.props.selectedEntry.id}/likes`)
        .then(_res => this.props.getVideoDetails(this.props.selectedEntry.id))
        .catch(err => console.log('Oops', err))
    }
    
    render() {
        const {selectedEntry, getVideoDetails} = this.props;

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
                                <img onClick={this.addLike} className="selected-media__icon selected-media__icon--like" src={likesIcon} alt="Likes Icon"/>
                                <p className="selected-media__number">{selectedEntry.likes}</p>
                            </div>
                        </div>
                    </div>
                    <p className="selected-media__description">
                        {selectedEntry.description}
                    </p>
                </section>
                <section className="selected-media__comments">
                    <Comments selectedEntry={selectedEntry} getVideoDetails={getVideoDetails}/>
                </section>
            </article>
        )
    }
}

export default SelectedMediaInfo;