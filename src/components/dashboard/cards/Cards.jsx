import React, {Component} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

import Card from '../card/Card';

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            arrayCard: [
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
            ],
            grid: 8,
        };
        this.onDragEnd = this.onDragEnd.bind(this);
        this.getItemStyle = this.getItemStyle.bind(this);
        this.reorder = this.reorder.bind(this);
        this.getItems = this.getItems.bind(this);
    }

    componentDidMount() {
        console.log('this.getItems(3)', this.getItems(3));
        this.setState({
            items: this.getItems(3)
        });
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        const items = this.reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );

        this.setState({items});
    }

    getItemStyle(isDragging, draggableStyle) {
        const {grid} = this.state;
        return ({
            margin: `${grid}px 0 0 0`,

            background: isDragging ? "lightgreen" : "none",
            ...draggableStyle
        });
    }

    reorder(list, startIndex, endIndex) {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }

    getItems() {
        const {arrayCard} = this.state;
        console.log('arrayCard', arrayCard);
        if (!!arrayCard) {
            return arrayCard.map(el => ({
                id: el.id,
                eventName: el.eventName,
                dueDate: el.dueDate,
                userName: el.userName,
                identicalStatus: el.identicalStatus,
                statusName: el.statusName
            }));
        }
    }

    render() {
        const {items} = this.state;
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div className="dragDropWrapper"
                             {...provided.droppableProps}
                             ref={provided.innerRef}
                             style={{width: '100%'}}
                        >
                            {!!items && items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div className="dragDropWrapper"
                                             ref={provided.innerRef}
                                             {...provided.draggableProps}
                                             {...provided.dragHandleProps}
                                             style={this.getItemStyle(
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