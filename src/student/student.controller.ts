import { Controller, Post, Body } from '@nestjs/common';
import { studentService } from './student.service';
import { Student } from './student.entity';
import { Get } from '@nestjs/common';
import { Put, Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: studentService) {}
  @Post()
  create(@Body() studentData: Partial<Student>): Promise<Student> {
    return this.studentService.create(studentData);
  }
  
  @Get()
    findAll(): Promise<Student[]> {
    return this.studentService.findAll();
}
  
}
