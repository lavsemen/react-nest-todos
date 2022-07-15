import {useEffect, useState} from "react";
import {TaskType} from "../types/Tasks";
import TodoApi from "../api/todos";

export const useTasks = () => {
    const [tasks, setTasks] = useState<TaskType[]>([])


    const saveTask = async (id: number, body: Omit<TaskType, 'id'>) => {
        try {
            await TodoApi.updateItem(id, body)
            await getTasks()
        } catch (err) {
            console.log(err)
        }
    }
    const removeTask = async (id: number) => {
        try {
            await TodoApi.removeItem(id)
            await getTasks()
        } catch (err) {
            console.log(err)
        }
    }

    const getTasks = async () => {
        try {
            const tasks = await TodoApi.getList()
            setTasks(tasks)
        } catch (err) {
            console.log(err)
        }
    }

    const addTask = async (body: Omit<TaskType, 'id' | 'completed'>) => {
        try {
            await TodoApi.addItem(body)
            await getTasks()
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getTasks()
    }, [])


    return {
        addTask,
        tasks,
        saveTask,
        removeTask
    }
}