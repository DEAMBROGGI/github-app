import { Module } from '@nestjs/common';
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';
import { HttpModule } from '@nestjs/axios';
import { CommitGateway } from './commits.gateway';

@Module({
    imports: [HttpModule],
    controllers: [CommitsController], 
    providers: [CommitsService, CommitGateway],
   })
   
   export class CommitsModule {}
