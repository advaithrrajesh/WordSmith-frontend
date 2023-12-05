import React, { useState, useEffect } from 'react';
import MainNavbar from '../components/MainNavBar/MainNavbar';
import Write from '../components/Write/Write';
import Blogs from '../components/Blogs/Blogs';
import SearchBlogs from '../components/SearchBlogs/SearchBlogs';

const Main = () => {
    const [isWriteVisible, setWriteVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleWriteClick = () => {
        setWriteVisible(true);
    };

    const handleBlogsClick = () => {
        setWriteVisible(false);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setWriteVisible(false); 
    };

    useEffect(() => {
        console.log("The search query after setting: ", searchQuery);
    }, [searchQuery]);

    console.log("Rendering Main with searchQuery: ", searchQuery);

    return (
        <>
            <MainNavbar onWriteClick={handleWriteClick} onBlogsClick={handleBlogsClick} onSearch={handleSearch} />
            <div className="WriteContainer">
                {(searchQuery !== '' && <SearchBlogs key={searchQuery} query={searchQuery} />) || (isWriteVisible ? <Write /> : <Blogs />)}
            </div>
        </>
    );
}

export default Main;
