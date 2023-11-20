import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../interfaces/user.interfaces';

@Controller('user')
export class UserController {
constructor(private readonly userService: UserService) { }

@Get('/:name')
    async userData(@Param ('name') name: string): Promise<User[]> {
        return this.userService.userData(name);
    }

@Get('/:name/repos')
    async userRepos(@Param ('name') name: string): Promise<User[]> {
        return this.userService.userRepos(name);
    } 

    @Post('/repoWebHooks')
    async commitsHoks(
        @Body('owner') owner:string,
        @Body('repo') repo:string
        ): Promise<User[]> {
        
        return this.userService.repoWebhooks(owner, repo);
    }      
    
}
