
import TasksItem from "./TasksItem";
import {TaskType} from "../../types/Tasks";

function TasksList({tasks, saveTask, removeTask}: {tasks: TaskType[], saveTask: Function, removeTask: Function}) {
    return (
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4">
            {tasks.length
                ? tasks.map(item =>
                    <div  key={item.id}>
                        <TasksItem
                            id={item.id}
                            className="mt-4"
                            description={item.description}
                            title={item.title} completed={item.completed}
                            saveTask={saveTask}
                            removeTask={removeTask}
                        />
                    </div>
                ):
                <h2>Список задач пуст</h2>
            }
        </div>
    );
}

export default TasksList;