import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CreateCommitDto } from '../dto/create-commits.dto';
import { Commit } from '../interfaces/commits.interface';

@Controller('commits')
export class CommitsController {
    constructor(private readonly commitsService: CommitsService) { }

    @Post('/repoCommits')
    async commits(
        @Body('owner') owner:string,
        @Body('repo') repo:string
        ): Promise<Commit[]> {
        
        return this.commitsService.commits(owner, repo);
    }  
}
