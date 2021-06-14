import './MediaList.scss';

function MediaList ({entries, handleClick}) {
    return (
        <article className="media-list">
            <h5 className="media-list__label">Next Video</h5>
            <section className="media-list__container">
                {entries.map(entry => {
                    return (
                        <section className="media" key={entry.id} onClick={() => handleClick(entry.id)}>
                            <div className="media__left">
                                <div className="media__img-container">
                                    <img src={entry.image} className="media__img" alt="Cover"/>
                                </div>
                            </div>
                            <div className="media__right">
                                <h2 className="media__title">{entry.title}</h2>
                                <p className="media__channel">{entry.channel}</p>
                            </div>
                        </section>    
                    )
                })}
            </section>
        </article>
    )
}

export default MediaList;