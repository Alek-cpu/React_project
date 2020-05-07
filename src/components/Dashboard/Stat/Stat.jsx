import React from 'react';
import ContactSortList from "../../forms/ContactSortList/ContactSortList";
import '../../../styles/Stat.scss';

const Stat = () => {
    return (
        <div className="stat">
            <div className="stat-wrap">
                <div className="diagram-header">
                    <div className="progress-compl-task">Task</div>
                    <div className="data-filter">
                        <div className="contact-sort">
                            Show:
                            <ContactSortList />
                        </div>
                    </div>
                </div>
                <div className="diagram-info">
                    <div className="diagram-circle">50<span className="diagram-circle__proc">%</span></div>
                    <div className="point-wrapper">
                        <div className="info-point">
                            <div className="point">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="3" stroke="#FFB946" stroke-width="2"/>
                                </svg>
                            </div>
                            <div className="info-point__name">
                                Active
                            </div>
                        </div>
                        <div className="info-point">
                            <div className="point">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="3" stroke="#2ED47A" stroke-width="2"/>
                                </svg>
                            </div>
                            <div className="info-point__name">
                                Completed
                            </div>
                        </div>
                        <div className="info-point">
                            <div className="point">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="3" stroke="#F7685B" stroke-width="2"/>
                                </svg>
                            </div>
                            <div className="info-point__name">
                                Ended
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stat;