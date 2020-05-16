import React from 'react';
import userAvatar from '../../../img/image4 4.png';

const Card = (props) => {
    return (
        <div className="card" id={props.id}>
            <div className="event-wrap">
                <div className="info-event_inner">
                    <div className="events__name">{props.eventName}</div>
                    <div className="events-date">
                        <div className="due">Due date:</div>
                        <div className="due__date">{props.dueDate}</div>
                    </div>
                    <div className="person-block">
                        <div className="person-photo">
                            <img className="mini__photo" src={userAvatar} alt={userAvatar}/>
                        </div>
                        <div className="person__name">{props.userName}</div>
                    </div>
                </div>
                <div className="identical-inner">
                    <div className="identical-status_inner">
                        <div className="identical__status">{props.identicalStatus}</div>
                    </div>
                    <div className="status-event">
                        <div className="edit-control">
                            <div className="eclipse">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="5" stroke="#FFB946" stroke-width="2"/>
                                </svg>
                            </div>
                            <div className="eclipse">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="5" stroke="#2ED47A" stroke-width="2"/>
                                </svg>
                            </div>
                            <div className="control rewtite">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z"
                                        fill="#C2CFE0"/>
                                </svg>
                            </div>
                            <div className="control deleted">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path className="basket"
                                          d="M3.99998 12.6667C3.99998 13.4 4.59998 14 5.33331 14H10.6666C11.4 14 12 13.4 12 12.6667V4.66667H3.99998V12.6667ZM12.6666 2.66667H10.3333L9.66665 2H6.33331L5.66665 2.66667H3.33331V4H12.6666V2.66667Z"
                                          fill="#C2CFE0"/>
                                </svg>
                            </div>
                        </div>
                        <span className="status__name control complited">{props.statusName}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;