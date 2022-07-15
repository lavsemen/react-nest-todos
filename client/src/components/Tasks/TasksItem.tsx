import React, {useRef, useState} from 'react';
import Button from "../Ui/Button";
import {TaskType} from "../../types/Tasks";


type Props = {
    id: number
    title: string,
    description: string,
    completed: boolean
    saveTask: Function,
    removeTask: Function
    [key: string]: any
}


function TasksItem({title, description, completed, saveTask, removeTask, id,  ...props }: Props ) {

    const [edit, setEdit] = useState<boolean>(false)
    const [task, setTask] = useState<TaskType>({
        title,
        description,
        completed,
        id,
    })

    const titleRef = useRef<HTMLInputElement | null>(null);

    const saveHandler = () => {
        const formData = {
            title: task.title,
            description: task.description,
            completed: task.completed
        }
        saveTask(id, formData)
        setEdit(false)
    }

    const removeHandler = () => {
        removeTask(id)
    }


    const startEdit = () => {
        setEdit(true)
        titleRef.current?.focus()
    }

    const EditActions = (
        <>
            <Button classNames="mr-2" action={saveHandler}>
                Сохранить
            </Button>
            <Button type="warning" action={() => setEdit(false)}>
                Отменить
            </Button>
        </>
    )

    const defaultAction = (
        <>
            <Button action={startEdit} classNames="mr-2">Редактировать</Button>
            <Button type="red" action={removeHandler}>
                Удалить
            </Button>
        </>
    )

    return (
        <div {...props} className={"p-4 rounded-xl border w-full " + props.className}>
            <input
                className="text-2xl text-center w-full focus:outline-none"
                value={task.title}
                readOnly={!edit}
                onChange={(e) => setTask(prevState => ({...prevState, title: e.target.value}))}
                ref={titleRef}

            />
            <div className="mt-4 flex">
                <label htmlFor="task-description" className="text-blue-500 mr-2">Описание:</label>
                <textarea
                    id="task-description"
                    className={`pl-2 rounded w-full focus:outline-none ${edit? 'border': 'border-0'}`}
                    value={task.description}
                    readOnly={!edit}
                    onChange={(e) => setTask(prevState => ({...prevState, description: e.target.value}))}
                />
            </div>
            <div className="mt-4 flex">
                <label htmlFor="task-description" className="text-blue-500 mr-2">Завершено:</label>
                <input
                    type="checkbox"
                    checked={task.completed}
                    disabled={!edit}
                    onChange={() => setTask(prevState => ({...prevState, completed: !prevState.completed}))}/>
            </div>
            <div className="flex items-center mt-4">
                {edit? EditActions : defaultAction}
            </div>
        </div>
    );
}

export default TasksItem;