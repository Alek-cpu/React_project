import React from 'react';
import userPhoto from '../../../img/image 2.png';


const MiniInfo = () => {
    return (
        <div className="profile">
            <div className="profile-info">
                <div className="profile_photo">
                    <img className="profile-photo__mini" src={userPhoto}/>
                </div>
                <div className="profile-block">
                    <div className="profile__name profileTxtElem">Sierra Ferguson</div>
                    <div className="profile__email profileTxtElem">s.ferguson@gmail.com</div>
                </div>
            </div>
        </div>
    );
}

export default MiniInfo;