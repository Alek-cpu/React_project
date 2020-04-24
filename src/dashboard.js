import React from "react";


const DashBoard = () => {
    return (
        <div className="base-wrapper">
            <DashBoardContainer />
        </div>
    );
}

const DashBoardContainer= () => {
    return (
        <div className="dd-wrap">
            <ProgresCheck />
            <CalendarWeek />
            <DragAndDrop />
            <ShowMore />
        </div>
    );
}

const ProgresCheck = () => {
    return (
        <div className="progress-check">
            <Task />
            <ProgresLine />
        </div>
    );
}

const Task = () => {
    return (
        <div className="task">
            <ProgresCompl />
            <DataFilter />
        </div>
    );
}

const ProgresCompl = () => {
    return (
        <div className="progress-compl">8 task completed out of 10</div>
    );
}

const DataFilter = () => {
    return (
        <div className="data-filter">
            <div className="contact-sort">
                Show:
                <form>
                    <select className="contact-sort__list" size="1">
                        <option>This Week</option>
                        <option>NeAll</option>
                        <option>NeAll</option>
                        <option>NeAll</option>
                        <option>NeAll</option>
                    </select>
                </form>
            </div>
        </div>
    );
}

const ProgresLine = () => {
    return (
        <div className="wrap__progress-line">
            <div className="progress-line"></div>
        </div>
    );
}

const CalendarWeek = () => {
    return (
        <div className="calendar-week">
            <div className="calendar-wrapper">
                <div className="date">23 December, Sunday</div>
                <div className="days-week">
                    <div className="day">
                        <div className="name__day">Sun</div>
                        <div className="number__day now__day">23</div>
                    </div>
                    <div className="day">
                        <div className="name__day">Mon</div>
                        <div className="number__day">24</div>
                    </div>
                    <div className="day">
                        <div className="name__day">Tue</div>
                        <div className="number__day">25</div>
                    </div>
                    <div className="day">
                        <div className="name__day">Wed</div>
                        <div className="number__day">26</div>
                    </div>
                    <div className="day">
                        <div className="name__day">Thu</div>
                        <div className="number__day">27</div>
                    </div>
                    <div className="day">
                        <div className="name__day">Fri</div>
                        <div className="number__day">28</div>
                    </div>
                    <div className="day">
                        <div className="name__day">Sat</div>
                        <div className="number__day">29</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const DragAndDrop = () => {
    return (
        <div className="drag-drop">
            <Cards />
        </div>
    );
}

const Cards = () => {
    return (
        <div className="drag-drop-wrapper">
            <CardFirst />
            <CardSecond />
            <CardThird />
        </div>
    );
}

const CardFirst = () => {
    return (
        <div id="a0" className="card" draggable="true">
            <div className="event-wrap">
                <div className="info-event_inner">
                    <div className="events__name">Send benefit review by Sunday</div>
                    <div className="events-date">
                        <div className="due">Due date:</div>
                        <div className="due__date">December 23, 2018</div>
                    </div>
                    <div className="person-block">
                        <div className="person-photo">
                            <img className="mini__photo" src="./assets/image%204.png" alt=""/>
                        </div>
                        <div className="person__name">George Fields</div>
                    </div>
                </div>
                <div className="identical-inner">
                    <div className="identical-status_inner">
                        <div className="identical__status">Reminder</div>
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
                        <span className="status__name control complited">Completed</span>

                    </div>
                </div>
            </div>
        </div>
    );
}

const CardSecond = () => {
    return (
        <div id="a1" className="card" draggable="true">
            <div className="event-wrap">
                <div className="info-event_inner">
                    <div className="events__name">Invite to office meet-up</div>
                    <div className="events-date">
                        <div className="due">Due date:</div>
                        <div className="due__date">December 23, 2018</div>
                    </div>
                    <div className="person-block">
                        <div className="person-photo"><img className="mini__photo"
                                                           src="./assets/image%203.png" alt=""/></div>
                        <div className="person__name">Rebecca Moore</div>
                    </div>
                </div>
                <div className="identical-inner">
                    <div className="identical-status_inner">
                        <div className="identical__status">Call</div>
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
                            <!--                                                THIS_THIS-->
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
                        <span className="status__name control end">Ended</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const CardThird = () => {
    return (
        <div id="a2" className="card" draggable="true">
            <div className="event-wrap">
                <div className="info-event_inner">
                    <div className="events__name">Office meet-up</div>
                    <div className="events-date">
                        <div className="due">Due date:</div>
                        <div className="due__date">December 23, 2018</div>
                    </div>
                    <div className="person-block">
                        <div className="person-photo"><img className="mini__photo"
                                                           src="./assets/image%205.png" alt=""/></div>
                        <div className="person__name">Lindsey Stroud</div>
                    </div>
                </div>

                <div className="identical-inner">
                    <div className="identical-status_inner">
                        <div className="identical__status">Event</div>
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
                            <!--                                                THIS_THIS-->
                            <div className="control rewrite">
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
                        <span className="status__name control complited">Completed</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ShowMore = () => {
    return (
        <div className="show-more">
            Show more
        </div>
    );
}