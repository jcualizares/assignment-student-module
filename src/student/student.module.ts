import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { studentService } from './student.service';
import { StudentController } from './student.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [studentService],
})
export class StudentModule {}
=======
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "./student.entity";
import { studentService } from "./student.service";
import { StudentController } from "./student.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Student])],
    controllers: [StudentController],
    providers: [studentService],
})
export class StudentModule{}
