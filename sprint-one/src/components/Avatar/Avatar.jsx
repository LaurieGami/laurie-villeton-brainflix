import './Avatar.scss';
import avatar from '../../assets/images/Mohan-muruge.jpg';

function Avatar() {
    return (
        <div className="avatar-container">
            <img src={avatar} className="avatar" alt="Avatar"/>
        </div>
    )
}

export default Avatar;