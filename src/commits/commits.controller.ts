import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CreateCommitDto } from '../dto/create-commits.dto';
import { Commit } from '../interfaces/commits.interface';

@Controller('user')
export class CommitsController {
    constructor(private readonly commitsService: CommitsService) { }

    @Get('/:name')
    async userData(@Param ('name') name: string): Promise<Commit[]> {
        return this.commitsService.userData(name);
    }
}
