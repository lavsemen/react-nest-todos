import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {TodosModel} from "./todos.model";

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [
      SequelizeModule.forFeature([TodosModel])
  ]
})
export class TodosModule {}
