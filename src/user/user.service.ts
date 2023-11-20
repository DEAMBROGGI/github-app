import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interfaces';
import { HttpService } from '@nestjs/axios/dist';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Logger } from '@nestjs/common'

@Injectable()
export class UserService {

    constructor(private readonly httpService: HttpService) { }

    async userData(name: string): Promise<User[]> {
        const { data } = await firstValueFrom(
            this.httpService.get<User[]>('https://api.github.com/users/' + name).pipe(
                catchError((error: AxiosError) => {
                    console.log(error)
                    throw 'An error happened!';
                }),
            ),
        );
        return data;
    }
    async userRepos(name: string): Promise<User[]> {
        const { data } = await firstValueFrom(
            this.httpService.get<User[]>('https://api.github.com/users/' + name + '/repos').pipe(
                catchError((error: AxiosError) => {
                    console.log(error)
                    throw 'An error happened!';
                }),
            ),
        );
        return data;
    }
    async repoWebhooks(owner: string, repo: string): Promise<User[]> {
        const { data } = await firstValueFrom(
            this.httpService.get<User[]>('https://api.github.com/repos/' + owner + '/' + repo + '/hooks').pipe(
                catchError((error: AxiosError) => {
                    console.log(error)
                    throw 'An error happened!';
                }),
            ),
        );
        return data;
    }
    async newCommitEvent(body:any) {
        console.log(body) 
        return body

    }
}
