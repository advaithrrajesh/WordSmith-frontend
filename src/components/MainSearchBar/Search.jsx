import React from "react";
import '../../styles/Search.css'
import SearchIcon from '@mui/icons-material/Search';

const Search = props => {
    return (
        // <div className="ui search">
        //         <input
        //             value={props.contactsValue}
        //             onChange={props.onChangeHandler}
        //             className="prompt"
        //             type="text"
        //             placeholder="Search Articles"
        //         />
        //         <i className="search icon" />
        //     <div className="results" />
        // </div>
        <div className="SearchComponentContainer">
            <form action="" class="search-bar">
                <input type="search" name="search" pattern=".*\S.*"  placeholder="Search articles here..."required />
                    <button class="search-btn" type="submit">   
                        <span><SearchIcon /></span>
                    </button>
            </form>
        </div>
    );
};

export default Search;
