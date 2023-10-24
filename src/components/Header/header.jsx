import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.img} src='./logo.png' alt="картинка"></img>
            <div className={s.text}>Aleksandr social site</div>
            <div className={s.items}>
                <div className={s.item}>Главная</div>
                <div>Контакты</div>
                <div>О нас</div>
                <div>Помощь</div>
            </div>
            <div className={s.loginBlock}>
                { props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>LOGIN</NavLink>}
                
            </div>
        </header>
    );
}

export default Header;