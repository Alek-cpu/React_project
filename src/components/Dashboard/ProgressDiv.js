import React from "react";

const ProgressDiv = () => {
    return (
        <div className="progres-wrap">
            <div className="progres-calendar-wrapper">
                <div className="calendar">
                    <div className="nameMonthWrapper">
                        <div className="leftArrow arrow">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" fill="black"
                                      fill-opacity="0.54"/>
                            </svg>
                        </div>
                        <div className="nameMonth">May 2019</div>
                        <div className="rightArrow arrow">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.589996 10.59L5.17 6L0.589996 1.41L2 0L8 6L2 12L0.589996 10.59Z" fill="black"
                                      fill-opacity="0.54"/>
                            </svg>
                        </div>
                    </div>

                    <div className="monthDayWrapper tableBody">
                        <div className="nameDayWrapper">
                            <div className="nameDay">Mon</div>
                            <div className="nameDay">Tue</div>
                            <div className="nameDay">Wed</div>
                            <div className="nameDay">Thu</div>
                            <div className="nameDay">Fri</div>
                            <div className="nameDay">Sat</div>
                            <div className="nameDay">Sun</div>
                        </div>
                        <div className="days"></div>
                    </div>

                </div>
            </div>
            <div className="stat">
                <div className="stat-wrap">
                    <div className="diagram-header">
                        <div className="progress-compl-task">Task</div>
                        <div className="data-filter">
                            <div className="contact-sort">
                                Show:
                                <form>
                                    <select className="contact-sort__list" size="1">
                                        <option>This month</option>
                                        <option>This week</option>
                                        <option>NeAll</option>
                                        <option>NeAll</option>
                                        <option>NeAll</option>
                                    </select>
                                </form>
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
        </div>
    );
}

export default ProgressDiv;