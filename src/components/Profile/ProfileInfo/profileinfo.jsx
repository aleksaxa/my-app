import React from 'react';
import s from './profileinfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileinfo}>
            <img className={s.i_img_profile} src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AssassinsCreedIIIDefinitiveEdition_ruRU_image1600w.jpg" alt="картинка"></img>
            <img className={s.i_img_avatar} src="https://klike.net/uploads/posts/2019-03/1551512888_2.jpg" alt="картинка"></img>
            <div className={s.i_username}>User name</div>
        </div>
    );
}

export default ProfileInfo;