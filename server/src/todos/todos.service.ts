import {HttpStatus, Injectable} from '@nestjs/common';
import {TodosModel} from "./todos.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateTodoDto} from "./dto/create-todo.dto";
import {UpdateTodoDto} from "./dto/update-todo.dto";

@Injectable()
export class TodosService {

    constructor(@InjectModel(TodosModel) private  todoRepository: typeof  TodosModel) {}

    async createTodo(dto: CreateTodoDto) {
        return await this.todoRepository.create(dto);
    }

    async getAllTodos() {
        return await this.todoRepository.findAll({order: [['id', 'DESC']]})
    }

    async getTodoById(id: number) {
        return await this.todoRepository.findByPk(id)
    }
    async updateOne(id: number, dto: UpdateTodoDto) {
        const updated = await this.todoRepository.update({...dto}, {where: {id: id}})
        if (+updated) {
            return {
                code: HttpStatus.OK,
                text: "Запись успешно обновлена"
            }
        } else {
            return {
                code: HttpStatus.BAD_REQUEST,
                text: 'Произошла ошибка обновления записи'
            }
        }
    }

    async deleteOne(id: number) {
        const deleted = await this.todoRepository.destroy({where: {id: id}})
        if (deleted) {
            return {
                status: HttpStatus.OK,
                text: 'Запись была успешно удаленна'
            }
        } else {
            return {
                code: HttpStatus.BAD_REQUEST,
                text: 'Произошла ошибка обновления записи'
            }
        }
    }
}
