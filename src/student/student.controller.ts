import { Controller, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';
import { Get } from '@nestjs/common';
import { Put, Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Post()
  create(@Body() studentData: Partial<Student>): Promise<Student> {
    return this.studentService.create(studentData);
  }
  

}
