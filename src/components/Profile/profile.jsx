import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './profile.module.css';
import ProfileInfo from './ProfileInfo/profileinfo';



const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts postsData={props.profilePage.postsData} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
        </div>
    );
}

export default Profile;