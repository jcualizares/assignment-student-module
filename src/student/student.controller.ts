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