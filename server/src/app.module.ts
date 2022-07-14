import {Module} from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { TodosModule } from './todos/todos.module';
import {TodosModel} from "./todos/todos.model";


@Module({
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'todo',
            models: [TodosModel],
            autoLoadModels: true
        }),
        TodosModule,
    ]
})
export class AppModule {}