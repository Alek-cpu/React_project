import React from 'react';
import Navigation from '../navigation-item/NavigationItem';
import userPhoto from '../../../img/image 2.png';


export default function UserNav() {
    return (
        <div className="profileContainer">
            <div className="profile">
                <div className="profileInfo">
                    <div className="profilePhoto">
                        <img className="profilePhotoMini" src={userPhoto} />
                    </div>
                    <div className="profileBlock">
                        <div className="profileName profileTxtElem">Sierra Ferguson</div>
                        <div className="profileEmail profileTxtElem">s.ferguson@gmail.com</div>
                    </div>
                </div>
            </div>
            <Navigation />
        </div>
    );
}