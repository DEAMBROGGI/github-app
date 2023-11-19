import { ApiProperty } from '@nestjs/swagger';

export class CreateCommitDto {
    @ApiProperty()
    readonly owner: string;
    @ApiProperty()
    readonly repo: string;
}
