import React, {Component} from 'react';

import classes from './Todo.css';
import Items from '../Items/Items';

class Todo extends Component {
    state = {
        tasks: [
          {
            id: 1,
            text: 'Faire le menage',
            active: true
          },
          {
            id: 2,
            text: 'Faire la lessive',
            active: true
          },
          {
            id: 3,
            text: 'Faire les courses',
            active: true
          }
        ],
        currentInput: 'Add a task',
        taskFilter: 'SHOW ALL'
    };
    
    taskClickedHandler = (id) => {
        const taskIndex = this.state.tasks.findIndex(task => {
            return task.id === id;
        });

        const tasks = [...this.state.tasks];
        tasks[taskIndex].active = !tasks[taskIndex].active;


        this.setState({
            tasks: tasks
        });
    };
    
    addTaskHandler = (text) => {
        const tasks = [...this.state.tasks];
        const newTask = {
            id: tasks.length + 1,
            text: text,
            active: true
        };

        tasks.push(newTask);

        this.setState({
            tasks: tasks
        });
    };

    updateTextHandler = (event) => {
        this.setState({
            currentInput: event.target.value
        });
    };
    
    setFilterTaskHandler = (filter) => {
        this.setState({
            taskFilter: filter
        });
    };

    render() {
        return (
            <div>
                <input type="text"
                    onChange={this.updateTextHandler.bind(this)}
                    value={this.state.currentInput}/>
                <button onClick={() => this.addTaskHandler(this.state.currentInput)}>Add</button>
                <Items 
                    tasksList={this.state.tasks}
                    taskClicked={this.taskClickedHandler.bind(this)}
                    filter={this.state.taskFilter} />
                <div>
                    <a className={classes.Filter}
                        style={this.state.taskFilter === 'SHOW ALL' ? {textDecoration: 'underline'} : null}
                        onClick={() => this.setFilterTaskHandler('SHOW ALL')}>All</a>
                    <a className={classes.Filter}
                        style={this.state.taskFilter === 'SHOW COMPLETED' ? {textDecoration: 'underline'} : null}
                        onClick={() => this.setFilterTaskHandler('SHOW COMPLETED')}>Completed</a>
                    <a className={classes.Filter}
                        style={this.state.taskFilter === 'SHOW ACTIVE' ? {textDecoration: 'underline'} : null}
                        onClick={() => this.setFilterTaskHandler('SHOW ACTIVE')}>Active</a>
                </div>
            </div>
        )
    }
};

export default Todo;