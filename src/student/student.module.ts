import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { student} from './student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([student])],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService]
})

export class StudentModule {}
