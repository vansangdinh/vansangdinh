import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { student } from "./student.entity";


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


}
