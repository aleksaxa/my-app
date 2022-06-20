import React from 'react';
import s from './nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Main</a>
            </div>
            <div className={s.item}>
                <a>Others</a>
            </div>
        </nav>
    );
}

export default Nav;