import { ApiProperty } from '@nestjs/swagger';

export class CreateCommitDto {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly age: number;
    @ApiProperty()
    readonly breed: string;
}
