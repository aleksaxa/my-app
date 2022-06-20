import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.myposts}>
            <div className={s.i_post}>
                <p>My post</p>
                <p>Your news</p>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
           <Post message='Hi, how are you?' likesCount='3'/>
           <Post message="It's my first post" likesCount='26'/>
           <Post message="I like React JS" likesCount='12'/>
        </div>
    );
}

export default MyPosts;