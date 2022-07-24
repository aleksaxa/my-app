import React from 'react';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';
import s from './profile.module.css';
import ProfileInfo from './ProfileInfo/profileinfo';



const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsConteiner />
        </div>
    );
}

export default Profile;