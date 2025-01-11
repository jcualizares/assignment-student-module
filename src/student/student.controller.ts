import { Controller, Post, Body } from '@nestjs/common';
import { studentService } from './student.service';
import { Student } from './entities/student.entity';
import { Get } from '@nestjs/common';
import { Put, Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { CreateStudentDto } from './studentdto';

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


}
=======
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { studentService } from "./student.service";
import { CreateStudentDto } from "./stuedentCreate";

//controller
//dito kinocontrol yon mga ginagawa sa create-to.dto.ts

@Controller('student')
export class StudentController{
    constructor(private readonly studentService: studentService){}
  
    @Post()
    create(@Body() dto: CreateStudentDto){
        return this.studentService.create(dto);
    }

   // Read Data
    @Get()
    findMany(){
        return this.studentService.findMany();
    }
 
    //update data controllrt

    
    @Put(':id')
    update(@Param('id') id: number, @Body() dto: CreateStudentDto){
        return this.studentService.udpate(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number, @Body() dto: CreateStudentDto){
        return this.studentService.delete(id);
    }






}
