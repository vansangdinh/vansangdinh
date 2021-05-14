import { Controller, Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor( private readonly studentservice:StudentService) {}
@Get()
async Getallstudent(){

    return await this.studentservice.getall();
}

@Get(':id')
async getstudentbuId(@Param('id') id:number){
    return await this.studentservice.getstudentbyId(id);    
}

}
