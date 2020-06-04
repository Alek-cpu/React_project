import React from 'react';
import ContactSortList from "../../forms/contact-sortlist/ContactSortList";

export default function ProgresCompl() {
    return (
        <div className="stat">
            <div className="statWrap">
                <div className="diagramHeader">
                    <div className="progressComplTask">Task</div>
                    <div className="dataFilter">
                        <div className="contactSort">
                            Show:
                            <ContactSortList />
                        </div>
                    </div>
                </div>
                <div className="diagramInfo">
                    <div className="diagramCircle">50<span className="diagramCircleProc">%</span></div>
                    <div className="pointWrapper">
                        <div className="infoPoint">
                            <div className="point">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="3" stroke="#FFB946" stroke-width="2"/>
                                </svg>
                            </div>
                            <div className="infoPointName">
                                Active
                            </div>
                        </div>
                        <div className="infoPoint">
                            <div className="point">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="3" stroke="#2ED47A" stroke-width="2"/>
                                </svg>
                            </div>
                            <div className="infoPointName">
                                Completed
                            </div>
                        </div>
                        <div className="infoPoint">
                            <div className="point">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="3" stroke="#F7685B" stroke-width="2"/>
                                </svg>
                            </div>
                            <div className="infoPointName">
                                Ended
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}