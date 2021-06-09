import './SearchBar.scss';
import searchIcon from '../../assets/icons/Icon-search.svg';

function SearchBar() {
    return (
        <form className="searchbar">
            <img src={searchIcon} alt="Search Icon" className="searchbar__icon" />
            <input type="text" placeholder="Search" className="searchbar__input" />
        </form>
    )
}

export default SearchBar;