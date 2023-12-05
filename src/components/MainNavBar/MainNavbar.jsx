// MainNavbar.js
import React, { useState } from 'react';
import '../../styles/MainNavbar.css';
import Search from '../MainSearchBar/Search';
import writingIcon from '../../assets/writing.png';
import userIcon from '../../assets/user.png';

const MainNavbar = ({ onWriteClick, onSearch }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleIconClick = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(`Selected option: ${event.target.value}`);

        if (event.target.value === 'write') {
            onWriteClick();
        }
    };

    const handleSearchSubmit = (query) => {
        onSearch(query);
    };

    return (
        <div className='mainPageNavbarContainer'>
            <div className="mainPageNavBarItems">
                <div className='Navbar-logo'>
                    Word<span style={{ color: '#1565c0' }}>Smith</span>
                    &nbsp;
                </div>
                <Search onSubmit={handleSearchSubmit} />
            </div>
            <div className='mainPageNavBarItems2'>
                <div className='writeIconContainer' onClick={onWriteClick}>
                    <img src={writingIcon} alt="" className='writeIcon' style={{ width: '30px', height: '30px' }} />
                    <h5><span style={{ color: '#1565c0' }}>Write</span></h5>
                </div>
                <img
                    src={userIcon}
                    alt=""
                    className="writeIcon"
                    style={{ width: '30px', height: '30px', marginRight: '15px', marginLeft: '15px' }}
                    onClick={handleIconClick}
                />
                {isDropdownVisible && (
                    <select value={selectedOption} onChange={handleSelectChange} onBlur={() => setDropdownVisible(false)}>
                        <option value="profile">Profile</option>
                        <option value="settings">Settings</option>
                        <option value="logout">Logout</option>
                    </select>
                )}
            </div>
        </div>
    );
}

export default MainNavbar;
