import { HttpException, HttpStatus, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { getRepository, Repository } from "typeorm";
import { student } from "./student.entity";
import { CreateStudentDto } from './dto/create.dto';
import { validate } from "class-validator";
import { UpdateStudentrDto } from "./dto/update.dto";

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(student)
        private readonly studentRepository: Repository<student>
      ) {}

async getall():Promise<student[]> {


    return  await this.studentRepository.find();
}

async getstudentbyId(id:number) {

    const stu = await this.studentRepository.findOne(id);
    if(!stu)
    {
        throw new NotFoundException('Not found student');
    }
    return stu;

}

async deletestudentby(id:number) {

  const stu = await this.studentRepository.findOne(id);
  if(!stu)
  {
    throw new NotFoundException('Not found student with id:'+ id);
      
  }
  return await this.studentRepository.delete(id);

}

async update(id:number,student: UpdateStudentrDto): Promise<student> {

 console.log(id);
/*  console.log(student.Id);
  const stu = await this.studentRepository.findOne(student.Id);
  console.log(stu);
  if(!stu)
  {
    throw new NotFoundException('Not found student with id:'+ student.Id);
      
  }*/let toUpdate = await this.studentRepository.findOne(id);
    if(!toUpdate)
    {
      throw new NotFoundException('Not found student with id:'+ id);
 
}
try {

  //return await this.studentRepository.update({Id:id}, UpdateStudentrDto);
  
  
  /*delete toUpdate.Name;
  delete toUpdate.Address;
  delete toUpdate.Phone;
  delete toUpdate.Email;*/

  let updated = Object.assign(toUpdate, student);
  return await this.studentRepository.save(updated);
  
} catch (error) {
  console.log(error);
  
}
 
      
    


}

 



async create(student: CreateStudentDto): Promise<student> {
/* const errors = await validate(student);
  if (errors.length > 0) {
    const _errors = {Name: 'Student input is not valid.'};
    throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);

  } */
  try {
    console.log("step 1");
    
    const newStudent = await this.studentRepository.create(); // step nay no tao 1 dong rong~. de no generate cai id moi
    console.log(newStudent);
    newStudent.Name = student.Name;
    newStudent.Address = student.Address;
    newStudent.Email = student.Email;
    newStudent.Phone = student.Phone;

    return this.studentRepository.save(newStudent);
  } catch (error) {
    console.log(error);
  }
}




    // check uniqueness of username/email 
  // const {id,Name,Address,Phone, Email} = dto;
 /*
    const qb = await getRepository(student)
      .createQueryBuilder('student')
      .where('student.id = :id', { id });

    const user = await qb.getOne();

    if (user) {
      const errors = {username: 'Username and email must be unique.'};
      throw new HttpException({message: 'Input data validation failed', errors}, HttpStatus.BAD_REQUEST);

    }*/

    // create new user
   
    //buildUserRO(savedUser: student): student | PromiseLike<student> {
    //    throw new Error("Method not implemented.");
   // }



/*
async updatestudent(id:number){

    
}

async delete(email: string): Promise<DeleteResult> {
    return await this.studentRepository.delete({ email: email});
  }*/

}
