import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "./student.entity";
import { Repository } from "typeorm";
import { CreateStudentDto } from "./stuedentCreate";

@Injectable()
export class studentService{
  constructor(@InjectRepository(Student) private readonly studentRespository: Repository<Student>) 
  {}

  // create or post data 
  async create(dto: CreateStudentDto){
        const student = this.studentRespository.create(dto);

        return await this.studentRespository.save(student);

    }

 
  

}