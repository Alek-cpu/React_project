import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CardList extends Component {
    showCardItem (){
        return this.props.card.map((c) => ({
            id: c.id,
            eventName: c.eventName,
            dueDate: c.dueDate,
            userName: c.userName,
            identicalStatus: c.identicalStatus,
            statusName: c.statusName
        }));
    }
    render() {
        return (
            this.showCardItem()
        );
    }
}

function mapStateToProps(state) {
    return {
        card: state.card
    }
}

export default connect(mapStateToProps)(CardList);