import React from 'react';

export default function DataFilter() {
    return (
        <div className="dataFilter">
            <div className="contactSort">
                Show:
                <form>
                    <select className="contactSortList" size="1">
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