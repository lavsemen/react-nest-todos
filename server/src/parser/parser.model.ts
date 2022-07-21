import {Column, DataType, Table, Model} from "sequelize-typescript";


interface ParserCreateAttrs {
    url: string
    query: string,
    count: number
}

@Table({tableName: 'parser'})
export class ParserModel extends Model<ParserModel, ParserCreateAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.STRING, allowNull: false})
    url: string;
    @Column({type: DataType.STRING, allowNull: false})
    query: string;
    @Column({type: DataType.INTEGER})
    count: number
}