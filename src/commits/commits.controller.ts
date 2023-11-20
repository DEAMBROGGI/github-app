import { Body, Controller, Post } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { Commit } from '../interfaces/commits.interface';
import { CommitGateway } from './commits.gateway';

@Controller('commits')
export class CommitsController {

    constructor(
        private readonly commitsService: CommitsService, 
        private readonly commitsGateway:CommitGateway 
        ) { }

    @Post('/repoCommits')
    async commits(
        @Body('owner') owner:string,
        @Body('repo') repo:string
        ): Promise<Commit[]> {  
        return this.commitsService.commits(owner, repo);
    }  
    @Post('/newCommitEvent')
    async newCommitEvent(@Body() body: any) {
       return this.commitsGateway.server.emit("newCommit",body)       
    }
}
