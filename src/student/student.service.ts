import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "./student.entity";
import { Repository } from "typeorm";
import { CreateStudentDto } from "./studentdto";
=======
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

 //Read data
  
 findMany(){
  return this.studentRespository.find();
}

async udpate(id: number, dto: CreateStudentDto){
    
  const student = await this.studentRespository.findOne({where: { id }})
  
  //check that record exist

  Object.assign(student, dto);

 return await this.studentRespository.save(student);


}



async delete(id: number){
    
  const student = await this.studentRespository.findOne({where: { id }})
  
 return await this.studentRespository.remove(student);


}


  
=======
  

}