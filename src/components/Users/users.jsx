import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './users.module.css';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        if (i === 45) break;
    }
    return <div className={s.users}>
        <div className={s.pageNumb}>
            {pages.map(p => {
                return <button className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</button>
            })}

        </div>
        {
            props.users.map(u => <div className={s.user} key={u.id}>
                <span className={s.img_button}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.img} src={u.photos.small != null ? u.photos.small : 'https://cdn-icons-png.flaticon.com/512/1053/1053244.png'} alt='картинка' />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.button} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.button} onClick={() => { props.follow(u.id) }}>Follow</button>
                        }
                    </div>
                </span>
                <span className={s.name_country_status}>
                    <span>
                        <div className={s.fullName}>{u.name}</div>
                        <div className={s.status}>{u.status}</div>
                    </span>
                    <span>
                        <div className={s.city}>{"u.location.city"}</div>
                        <div className={s.country}>{"u.location.country"}</div>
                    </span>
                </span>
            </div >)
        }
    </div >
}

export default Users;