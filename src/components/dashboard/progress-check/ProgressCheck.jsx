import React, {Component} from 'react';

import SelectBox from "../../forms/select-box/SelectBox";

const items = [
    {
        name: 'Week'
    },
    {
        name: 'Month'
    },
    {
        name: 'Day'
    },
]

export default class ProgressCheck extends Component{
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="progressCheck">
                <div className="task">
                    <div className="progressCompleted">8 task completed out of 10</div>
                    <div className="dataFilter">
                        <div className="contactSort">
                            Show:
                            <SelectBox items={items} />
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