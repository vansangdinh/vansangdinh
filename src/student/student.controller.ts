import { Body, Controller, Get, Param, Post, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateStudentDto } from './dto/create.dto';
import { UpdateStudentrDto } from './dto/update.dto';
import { student } from './student.entity';
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

//@UsePipes(new ValidationPipe()) (@Param('id') id:number,

  @Post('student')
  async create(@Body() params: CreateStudentDto) {
    try{
      return await this.studentservice.create(params);
    }
    catch(ex){
      console.log(ex);
    }
  }

  @Put(':id')
  async updatestudent(@Param('id') id:number, @Body() Param:UpdateStudentrDto){

    try {
      console.log(id);
      console.log(Param.Id);
        return await this.studentservice.update(id,Param);
    } catch (exx) {
      console.log(exx);
    }

  }


  @Delete(':id')
async deletestudent(@Param('id') id:number){
    return await this.studentservice.deletestudentby(id);    
}

}
