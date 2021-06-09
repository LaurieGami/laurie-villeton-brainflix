import './Header.scss';
import logo from '../../assets/logo/Logo-brainflix.svg';
import SearchBar from '../SearchBar/SearchBar';
import UploadBtn from '../UploadBtn/UploadBtn';
import Avatar from '../Avatar/Avatar';

function Header() {
    return (
        <header className="header">
            <section className="header__logo">
                <a className="header__logo-link" href="">
                    <img className="header__logo" src={logo} />
                </a>
            </section>
            <section className="header__content">
                <SearchBar />
                <UploadBtn />
                <Avatar />
            </section>
        </header>

    )
}

export default Header;