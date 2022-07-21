import{Module} from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { ParserService } from './parser.service';
import {ParserController} from "./parser.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {ParserModel} from "./parser.model";

@Module({
  providers: [ParserService],
  controllers: [ParserController],
  imports: [
      HttpModule,
      SequelizeModule.forFeature([ParserModel])
  ],
})
export class ParserModule {}
