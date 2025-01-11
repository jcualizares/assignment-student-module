import { Controller, Post, Body } from '@nestjs/common';
import { studentService } from './student.service';
import { Get } from '@nestjs/common';
import { Put, Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { CreateStudentDto } from './studentdto';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: studentService) {}
  @Post()
  create(@Body() studentData: Partial<Student>): Promise<Student> {
    return this.studentService.create(studentData);
  }
  
  @Get()
    findMany(){
        return this.studentService.findMany();
    }


    @Put(':id')
    update(@Param('id') id: number, @Body() dto: CreateStudentDto){
        return this.studentService.udpate(id, dto);
    }
    @Delete(':id')
    delete(@Param('id') id: number, @Body() dto: CreateStudentDto){
        return this.studentService.delete(id);
    }

}
