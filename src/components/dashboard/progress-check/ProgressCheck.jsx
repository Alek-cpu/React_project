import React, {Component} from 'react';

import SelectSort from "../../forms/select-sort/SelectSort";

export default class ProgressCheck extends Component{
    constructor(props) {
        super(props);
        this.state = {
            options: ["Month", "Week", "Day"]
        }
    }
    render() {
        return (
            <div className="progressCheck">
                <div className="task">
                    <div className="progressCompleted">8 task completed out of 10</div>
                    <div className="dataFilter">
                        <div className="contactSort">
                            Show:
                            <select className="contactSortList" size="1">
                                {this.state.options.map((option, idx) =>  <option key={idx} >{option} </option>)}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="wrapProgressLine">
                    <div className="progressLine" />
                </div>
            </div>
        );
    }

}