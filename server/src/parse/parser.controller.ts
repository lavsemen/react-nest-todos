import {Body, Controller, Post} from '@nestjs/common';
import {ParserService} from "./parser.service";
import {ParseImageDto} from "./dto/parse-image.dto";

@Controller('api/parse')
export class ParserController {
    constructor(private botService: ParserService) {}

    @Post('/image')
    async parseImage(@Body() {url}: ParseImageDto) {
        return this.botService.parseImage(url);
    }
}
