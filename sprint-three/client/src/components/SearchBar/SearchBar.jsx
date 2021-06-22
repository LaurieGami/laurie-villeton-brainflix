import './SearchBar.scss';
import { Component } from 'react';
import searchIcon from '../../assets/icons/Icon-search.svg';

class SearchBar extends Component {

    // Prevents the search bar from working when pressing "Enter"
    handleSearch = (event) => {
        if(event.keyCode === 13) {
            event.preventDefault();
        }
    }

    render() {
        return (
            <form className="searchbar" onKeyDown={this.handleSearch}>
                <img src={searchIcon} alt="Search Icon" className="searchbar__icon" />
                <input type="text" placeholder="Search" className="searchbar__input" />
            </form>
        )
    }
}

export default SearchBar;