import React from 'react';

type Props = {title: string, description: string, completed: boolean}

function TasksItem({title, description, completed}: Props ) {
    return (
        <div className="p-4 rounded">
            {title}
            {description}
            {completed}
        </div>
    );
}

export default TasksItem;