import './Header.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo/Logo-brainflix.svg';

import SearchBar from '../SearchBar/SearchBar';
import UploadBtn from '../UploadBtn/UploadBtn';
import Avatar from '../Avatar/Avatar';

function Header() {
    return (
        <nav className="header">
            <section className="header__logo">
                <Link to="/" className="header__logo-link">
                    <img className="header__logo-img" src={logo} alt="BrainFlix Logo"/>
                </Link>
            </section>
            <ul className="header__content">
                <li className="header__search">
                    <SearchBar />
                </li>
                <li className="header__upload">
                    <Link to="/VideoUpload" className="header__upload-link">
                        <UploadBtn />
                    </Link>
                </li>
                <li className="header__avatar">
                    <Avatar />
                </li>
            </ul>
        </nav>

    )
}

export default Header;