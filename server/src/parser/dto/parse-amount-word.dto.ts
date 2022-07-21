import {ApiProperty} from "@nestjs/swagger";

export class  ParseAmountWordDto {
    @ApiProperty({ description: "url по которому нужно спарсить", nullable: false })
    readonly url: string;
    @ApiProperty({ description: "поисковый запрос", nullable: false })
    readonly query: string;
}