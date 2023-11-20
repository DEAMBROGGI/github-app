import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitsModule } from './commits/commits.module';
import { UserModule } from './user/user.module';

@Module({
 imports: [CommitsModule, UserModule, ConfigModule.forRoot()],
 controllers: [AppController],
 providers: [AppService],

})

export class AppModule {}