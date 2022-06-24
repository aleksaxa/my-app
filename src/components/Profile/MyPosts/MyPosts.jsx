import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/State';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    debugger;
    let postsElements = props.postsData.map(posts => <Post message={posts.message} likesCount={posts.likes} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.myposts}>
            <div className={s.i_post}>
                <h3>My post</h3>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;