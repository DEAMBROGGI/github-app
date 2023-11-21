import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitsModule } from './commits/commits.module';
import { UserModule } from './user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
 imports: [CommitsModule, UserModule, ConfigModule.forRoot(),ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'),
    exclude: ['/api/(.*)']
  }),],
 controllers: [AppController],
 providers: [AppService],

})

export class AppModule {}