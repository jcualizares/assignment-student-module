import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { StudentModule } from './todos/student.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
   
TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
 
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_HOST'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [join(process.cwd(), 'dist/**/*.entity.js')],
    synchronize: true,
    }),
    inject: [ConfigService],
  }),
  //import the tods module 
  StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
