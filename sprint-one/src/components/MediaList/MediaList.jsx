import './MediaList.scss';
import React from 'react';

class MediaList extends React.Component {
    render () {
        return (
            <article className="media-list">
                <h5 className="media-list__label">Next Video</h5>
                <section className="media-list__container">
                    <>
                    {this.props.entries.map(entry => {
                        return (
                            <section className="media" key={entry.id} onClick={() => this.props.clickHandler(entry.id)}>
                                <div className="media__left">
                                    <div className="cover-container">
                                        <img src={entry.image} className="cover" alt="Cover"/>
                                    </div>
                                </div>
                                <div className="media__right">
                                    <h2 className="media__title">{entry.title}</h2>
                                    <p className="media__channel">{entry.channel}</p>
                                </div>
                            </section>    
                        )
                    })}
                    </>
                </section>
            </article>
        )
    }
}

export default MediaList;