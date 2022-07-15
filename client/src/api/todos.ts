import ApiAbstract from "./ApiAbastract";
import {AxiosError} from "axios";
import {TaskType} from "../types/Tasks";

class TodoApi extends ApiAbstract {
    async getList() {
        try {
            const response = await this.$axios.get('/todos')
            return response.data
        } catch (error: AxiosError | unknown) {
            if (error instanceof AxiosError) {
                throw new Error(error.message)
            }
            throw new Error('Произошла неизвестная ошибка')
        }
    }

    async removeItem(id: number) {
        try {
            await this.$axios.delete(`/todos/${id}`)
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.message)
            }
            throw new Error('Произошла неизвестная ошибка')
        }
    }

    async updateItem(id: number, body: Omit<TaskType, 'id'>) {
        try {
            await this.$axios.put(`/todos/${id}`, body)
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.message)
            }
            throw new Error('Произошла неизвестная ошибка')
        }
    }
    async addItem(body: Omit<TaskType, 'id' | 'completed'>) {
        try {
            await this.$axios.post('/todos', body)
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.message)
            }
            throw new Error('Произошла неизвестная ошибка')
        }
    }
}

export default new TodoApi()