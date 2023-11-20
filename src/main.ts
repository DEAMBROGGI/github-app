import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger:["log", "warn", "error"]
  });
  const options = new DocumentBuilder()

   .setTitle('GitHub Commits Api')
   .setDescription('Commit statistics API per user')
   .setVersion('1.0')
   .addTag('commits')
   .build();

 const document = SwaggerModule.createDocument(app, options);
 
 SwaggerModule.setup('api', app, document);

  await app.listen(5000); 
}
bootstrap();
