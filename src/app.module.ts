import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test',
      autoLoadEntities:true,
      synchronize: true,
    }),
    StudentModule

  ],
  controllers: [StudentController],
})
export class AppModule {}
