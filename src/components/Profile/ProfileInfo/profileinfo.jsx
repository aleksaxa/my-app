import React from 'react';
import Preloader from '../../Common/Preloader/preloader';
import s from './profileinfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileinfo}>
            <img className={s.i_img_avatar} src={props.profile.photos.large != null ? props.profile.photos.large : 'https://cdn-icons-png.flaticon.com/512/1053/1053244.png'} alt="картинка"></img>
            <div className={s.i_username}>{props.profile.fullName}</div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} userId={props.profile.userId} autorizedUserId={props.autorizedUserId} />
        </div>
    );
}

export default ProfileInfo;