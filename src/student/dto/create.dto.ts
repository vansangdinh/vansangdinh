import { IsNotEmpty } from 'class-validator';

export class CreateStudentDto {

  @IsNotEmpty()
  readonly id: number;

  @IsNotEmpty()
  readonly Name: string;

  @IsNotEmpty()
  readonly Address: string;

  @IsNotEmpty()
  readonly Phone: string;

  @IsNotEmpty()
  readonly Email: string;
}

