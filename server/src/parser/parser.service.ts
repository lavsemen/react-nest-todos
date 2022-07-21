import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {Html} from "../helpers/Html";
import {ParserModel} from "./parser.model";
import {ParseAmountWordDto} from "./dto/parse-amount-word.dto";
import {InjectModel} from "@nestjs/sequelize";
import {query} from "express";
import {ParseAmountHistory} from "./dto/parse-amount-history.dto";




@Injectable()
export class ParserService {
    constructor(
        @InjectModel(ParserModel) private parserRepository: typeof ParserModel,
        private httpsService: HttpService,
    ) {}

    async parseImage (url: string)
    {
        const { data } = await this.httpsService.get(url, {responseType: 'text'}).toPromise();
        return Html.getImgUrls(data);
    }

    async amountWord(dto: ParseAmountWordDto) {
        const { data } = await this.httpsService.get(dto.url, {responseType: 'text'}).toPromise();
        const text = Html.removeHtmlTags(data);
        const count = (text.match(new RegExp(dto.query, 'gi')) || []).length;

        await this.parserRepository.create({...dto, count})
        return count
    }

    async getHistoryAmountWord(query: ParseAmountHistory) {
        return this.parserRepository.findAll({
            order: [
                [(query.sortProperty ?? 'id'), (query.sort ?? 'asc')]
            ],
            where: {
                ...query.filter
            }
        })
    }
}
