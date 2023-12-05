import React, { useState } from "react";
import '../../styles/Search.css';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchQuery);
    };

    return (
        <div className="SearchComponentContainer">
            <form onSubmit={handleSubmit} className="search-bar">
                <input
                    type="search"
                    name="search"
                    pattern=".*\S.*"
                    placeholder="Search articles here..."
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <button type="submit" className="search-btn">
                    <span><SearchIcon /></span>
                </button>
            </form>
        </div>
    );
};

export default Search;
