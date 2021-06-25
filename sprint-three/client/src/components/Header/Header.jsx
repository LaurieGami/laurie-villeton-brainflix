import './Header.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo/Logo-brainflix.svg';

import SearchBar from '../SearchBar/SearchBar';
import UploadBtn from '../UploadBtn/UploadBtn';
import Avatar from '../Avatar/Avatar';

function Header() {
    return (
        <nav className="header">
            <div className="header-container">
                <section className="header__logo">
                    <Link to="/" className="header__logo-link">
                        <img className="header__logo-img" src={logo} alt="BrainFlix Logo"/>
                    </Link>
                </section>
                <section className="header__content">
                    <div className="header__search">
                        <SearchBar />
                    </div>
                    <div className="header__buttons">
                        <div className="header__upload">
                            <Link to="/videoupload" className="header__upload-link">
                                <UploadBtn />
                            </Link>
                        </div>
                        <div className="header__avatar">
                            <Avatar />
                        </div>
                    </div>
                </section>
            </div>
        </nav>

    )
}

export default Header;