import { Injectable } from '@nestjs/common';
import { Commit } from '../interfaces/commits.interface';
import { HttpService } from '@nestjs/axios/dist';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class CommitsService {

  constructor(private readonly httpService: HttpService) {}

  async userData(name:string): Promise<Commit[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Commit[]>('https://api.github.com/users/'+name).pipe(
        catchError((error: AxiosError) => {
            console.log(error)
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
