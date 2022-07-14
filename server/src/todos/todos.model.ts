import {Column, DataType, Model, Table} from "sequelize-typescript";

interface TodoCreationAttrs {
    title: string,
    description: string
    completed?: boolean
}
@Table({tableName: 'todos'})
export class TodosModel extends Model<TodosModel, TodoCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: false})
    title: string

    @Column({type: DataType.STRING, allowNull: false})
    description: string

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    completed: boolean
}