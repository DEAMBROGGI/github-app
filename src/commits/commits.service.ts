import { Injectable } from '@nestjs/common';
import { Commit } from '../interfaces/commits.interface';
import { HttpService } from '@nestjs/axios/dist';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class CommitsService {

  constructor(private readonly httpService: HttpService) { }

  async commits(owner:string, repo:string): Promise<Commit[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Commit[]>('https://api.github.com/repos/'+owner+'/'+repo+'/commits', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          'Authorization': 'Bearer '+ process.env.GITHUB_TOKEN

        }
      }).pipe(
        catchError((error: AxiosError) => {
          console.log(error)
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  } 
}
