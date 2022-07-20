import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";



@Injectable()
export class ParserService {
    constructor(private httpsService: HttpService) {}
    async parseImage (url: string)
    {
        const {data} = await this.httpsService.get(url, {
            responseType: 'text'
        }).toPromise();

        const imgTags = data.match(/<img[^>]+>/g);

        return imgTags.map(imgTag => {
            const src = imgTag.match(/src="([^"]+)"/);
            return {
                src: src && src[1],
            }
        });
    }
}
