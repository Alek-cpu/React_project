import React, {Component} from 'react';
import Card from "../card/Card";
import userCardList from "../../../containers/userCardList";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import CardList from "../../../containers/userCardList";

const arrayCard = [
    {
        id: `r2d2`,
        eventName: "Send benefit review by Sunday",
        dueDate: "December 23, 2020",
        userName: "George Fields",
        identicalStatus: "Reminder",
        statusName: "Completed"
    },
    {
        id: `r2d3`,
        eventName: "Invite to office meet-up",
        dueDate: "December 22, 2019",
        userName: "Rebecca Moore",
        identicalStatus: "Call",
        statusName: "Completed"
    },
    {
        id: `r2d4`,
        eventName: "Office meet-up",
        dueDate: "December 21, 2018",
        userName: "Lindsey Stroud",
        identicalStatus: "Event",
        statusName: "Completed"
    }
]

const getItems = () => arrayCard.map(el => ({
    id: el.id,
    eventName: el.eventName,
    dueDate: el.dueDate,
    userName: el.userName,
    identicalStatus: el.identicalStatus,
    statusName: el.statusName
}));


const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    margin: `${grid}px 0 0 0`,

    background: isDragging ? "lightgreen" : "none",
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    width: `${100}%`
});

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: getItems(3)
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );

        this.setState({
            items
        });
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div className="drag-drop-wrapper"
                             {...provided.droppableProps}
                             ref={provided.innerRef}
                             style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {this.state.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div className="drag-drop-wrapper"
                                             ref={provided.innerRef}
                                             {...provided.draggableProps}
                                             {...provided.dragHandleProps}
                                             style={getItemStyle(
                                                 snapshot.isDragging,
                                                 provided.draggableProps.style
                                             )}
                                        >
                                            <Card
                                                eventName={item.eventName}
                                                dueDate={item.dueDate}
                                                userName={item.userName}
                                                identicalStatus={item.identicalStatus}
                                                statusName={item.statusName}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default Cards;