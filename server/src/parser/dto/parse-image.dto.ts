import {ApiProperty} from "@nestjs/swagger";

export class ParseImageDto {
    @ApiProperty({ description: "url по которому нужно спарсить", nullable: false })
    readonly url: string;
}