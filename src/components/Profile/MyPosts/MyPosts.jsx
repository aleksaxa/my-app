import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements = props.postsData.map(posts => <Post message={posts.message} key={posts.id} likesCount={posts.likes} />);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.myposts}>
            <div className={s.i_post}>
                <h3>My post</h3>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            {postsElements}
        </div>
    );
}


const maxLength10 = maxLengthCreator(10);
const minLength3 = minLengthCreator(3);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" placeholder='Post message' validate={[required, minLength3, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "MyPostsAddPostForm"}) (AddPostForm)

export default MyPosts;