import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {ParserService} from "./parser.service";
import {ParseImageDto} from "./dto/parse-image.dto";
import {ApiOkResponse} from "@nestjs/swagger";
import {ParseAmountWordDto} from "./dto/parse-amount-word.dto";
import {query} from "express";
import {ParseAmountHistory} from "./dto/parse-amount-history.dto";

@Controller('api/parser')
export class ParserController {
    constructor(private parserService: ParserService) {}

    @ApiOkResponse({ description: 'url картинок' })
    @Post('/image')
    async parseImage(@Body() dto: ParseImageDto) {
        return this.parserService.parseImage(dto.url);
    }

    @Post('/amount-word')
    async amountWord(@Body() dto: ParseAmountWordDto) {
        return this.parserService.amountWord(dto);
    }

    @Get('/amount-word/history')
    async getHistoryAmountWord(@Query() query: ParseAmountHistory) {
       return  await this.parserService.getHistoryAmountWord(query)
    }

}

