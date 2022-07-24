import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' alt='картинка' />
            <span className={s.item}>{props.message}</span>
            <span className={s.likes}>like {props.likesCount}</span>
        </div>
    );
}

export default Post;