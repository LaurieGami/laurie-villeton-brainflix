import './Header.scss';
import logo from '../../assets/logo/Logo-brainflix.svg';
import SearchBar from '../SearchBar/SearchBar';
import UploadBtn from '../UploadBtn/UploadBtn';
import Avatar from '../Avatar/Avatar';

function Header() {
    return (
        <header className="header">
            <section className="header__logo" href="">
                <img className="header__logo-img" src={logo} alt="BrainFlix Logo"/>
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