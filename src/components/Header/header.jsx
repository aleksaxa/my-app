import React from 'react';
import s from './header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Assassins_creed_logo.png/800px-Assassins_creed_logo.png' alt="картинка"></img>
        </header>
    );
}

export default Header;