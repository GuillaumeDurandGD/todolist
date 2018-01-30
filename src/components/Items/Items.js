import React from 'react';
import Item from './Item/Item';

const items = (props) => {

    const tasksList = props.tasksList.filter(task => {
        switch(props.filter) {
            case 'SHOW ALL':
                return true;
            case 'SHOW ACTIVE':
                return task.active;
            case 'SHOW COMPLETED':
                return !task.active;
            default:
                return true;
        }
    }).map(task => (
        <Item key={task.id}
            text={task.text}
            clicked={() => props.taskClicked(task.id)}
            active={task.active}/>
    ));

    return (
        <ul>
            {tasksList}
        </ul>
    );
};

export default items;