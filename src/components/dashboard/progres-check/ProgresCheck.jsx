import React from 'react';
import DataFilter from '../../forms/datafilter/DataFilter';

export default function ProgresCheck() {
    return (
        <div className="progressCheck">
            <div className="task">
                <div className="progressCompl">8 task completed out of 10</div>
                <DataFilter />
            </div>
            <div className="wrapProgressLine">
                <div className="progressLine"></div>
            </div>
        </div>
    );
}