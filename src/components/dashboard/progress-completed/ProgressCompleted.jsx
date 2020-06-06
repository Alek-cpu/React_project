import React from 'react';

import ContactSortList from '../../forms/contact-sortlist/ContactSortList';
import yellowMinCircle from '../../../img/mini-yellow-circle.svg';
import greenMinCircle from '../../../img/green-mini-circle.svg';
import redMinCircle from '../../../img/red-mini-eclipse.svg';

export default function ProgressCompleted() {
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
                                <img src={yellowMinCircle} alt="yellow" />
                            </div>
                            <div className="infoPointName">
                                Active
                            </div>
                        </div>
                        <div className="infoPoint">
                            <div className="point">
                                <img src={greenMinCircle} alt="green" />
                            </div>
                            <div className="infoPointName">
                                Completed
                            </div>
                        </div>
                        <div className="infoPoint">
                            <div className="point">
                                <img src={redMinCircle} alt="red" />
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