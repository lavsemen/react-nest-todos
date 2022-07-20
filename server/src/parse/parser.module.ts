import{Module} from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { ParserService } from './parser.service';
import {ParserController} from "./parser.controller";

@Module({
  providers: [ParserService],
  imports: [HttpModule],
  controllers: [ParserController]
})
export class ParserModule {}
