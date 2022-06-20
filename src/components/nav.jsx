import React from 'react';
import './nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <div className='item'>
                <a>Profile</a>
            </div>
            <div className='item'>
                <a>Messages</a>
            </div>
            <div className='item'>
                <a>News</a>
            </div>
            <div className='item'>
                <a>Main</a>
            </div>
            <div className='item'>
                <a>Others</a>
            </div>
        </nav>
    );
}

export default Nav;