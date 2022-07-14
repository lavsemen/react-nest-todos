import React from 'react';
import TasksItem from "./TasksItem";

function TasksList() {

    const TaskList = [
        {
            id: 1,
            title: 'Test',
            description: 'Test',
            completed: false
        }
    ]

    return (
        <div className="column">
            {TaskList.map(item =>
                <TasksItem {...item} key={item.id}/>)}
        </div>
    );
}

export default TasksList;