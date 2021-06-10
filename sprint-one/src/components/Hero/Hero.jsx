import './Hero.scss';
import React from 'react';

class Hero extends React.Component {
    render () {
        return (
            <section className="hero">
                <video className="hero__video" controls poster={this.props.entry.image}>
                    <source className="hero__video-source" src={this.props.entry.video} type="video/mp4" />
                </video>
            </section>
        )
    }
}

export default Hero;