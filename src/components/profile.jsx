import React from 'react';
import './profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <div className="pimg">
                <img className='img-proffile' src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AssassinsCreedIIIDefinitiveEdition_ruRU_image1600w.jpg" alt="картинка"></img>
            </div>
            <div className="pavatar">
                <img className='img-avatar' src="https://klike.net/uploads/posts/2019-03/1551512888_2.jpg" alt="картинка"></img>
            </div>
            <div className="pusername">
                <p>User name</p>
            </div>
            <div className="pmypost">
                <p>My post</p>
                Your news
            </div>
            <div className="ppost">
                <div>post1</div>
                <div>post2</div>
                <div>post3</div>
                <div>post4</div>
                <div>post5</div>
            </div>
        </div>
    );
}

export default Profile;