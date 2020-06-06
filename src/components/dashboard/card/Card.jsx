import React from 'react';

import userAvatar from '../../../img/person-male.png';
import yellowCircle from '../../../img/yel-eclipse.svg';
import greenCircle from '../../../img/green-eclipse.svg';
import pen from '../../../img/pen.svg';
import deleted from '../../../img/deleted.svg';

const Card = (
    {id, eventName, dueDate, userName, identicalStatus, statusName}
) => {
    return (
        <div className="card" id={id}>
            <div className="eventWrap">
                <div className="infoEventInner">
                    <div className="eventsName">{eventName}</div>
                    <div className="eventsDate">
                        <div className="due">Due date:</div>
                        <div className="dueDate">{dueDate}</div>
                    </div>
                    <div className="personBlock">
                        <div className="personPhoto">
                            <img className="miniPhoto" src={userAvatar} alt="profilesAvatar"/>
                        </div>
                        <div className="personName">{userName}</div>
                    </div>
                </div>
                <div className="identicalInner">
                    <div className="identicalStatusInner">
                        <div className="identicalStatus">{identicalStatus}</div>
                    </div>
                    <div className="statusEvent">
                        <div className="editControl">
                            <div className="eclipse">
                                <img src={yellowCircle} alt="yellow" />
                            </div>
                            <div className="eclipse">
                                <img src={greenCircle} alt="green" />
                            </div>
                            <div className="control rewrite">
                                <img src={pen} alt="rewrite" />
                            </div>
                            <div className="control deleted">
                                <img className="basket" src={deleted} alt="deleted" />
                            </div>
                        </div>
                        <span className="statusName control complited">{statusName}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;