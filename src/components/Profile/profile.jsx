import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <img className={s.i_img_profile} src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AssassinsCreedIIIDefinitiveEdition_ruRU_image1600w.jpg" alt="картинка"></img>
            <img className={s.i_img_avatar} src="https://klike.net/uploads/posts/2019-03/1551512888_2.jpg" alt="картинка"></img>
            <div className={s.i_username}>
                <p>User name</p>
            </div>
          <MyPosts />
        </div>
    );
}

export default Profile;