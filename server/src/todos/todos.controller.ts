import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {CreateTodoDto} from "./dto/create-todo.dto";
import {TodosService} from "./todos.service";
import {UpdateTodoDto} from "./dto/update-todo.dto";

// @ts-ignore
@Controller('api/todos')
export class TodosController {

    constructor(private todoService: TodosService) {}
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() todoDto: CreateTodoDto) {
        return this.todoService.createTodo(todoDto)
    }

    @Get()
    getAll() {
        return this.todoService.getAllTodos()
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return  this.todoService.getTodoById(id)
    }

    @Put(':id')
    updateOne(@Param('id') id: number, @Body() dto: UpdateTodoDto) {
        return this.todoService.updateOne(id, dto)
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number) {
        return this.todoService.deleteOne(id)
    }
}
