import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitsModule } from './commits/commits.module';
import { UserModule } from './user/user.module';

@Module({
 imports: [CommitsModule, UserModule],
 controllers: [AppController],
 providers: [AppService],

})

export class AppModule {}