import React from 'react';
import '../../../styles/DataFilter.scss';

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

export default DataFilter;