import React from 'react';

import search from '../../../img/search.svg';

export default class SearchStringForm extends React.Component {
    render() {
        return (
            <form className="searchString">
                <button className="loupe" type="submit">
                    <img src={search} alt="search" />
                </button>
                <input className="searchString" type="text" placeholder="Global search"/>
            </form>
        );
    }
}