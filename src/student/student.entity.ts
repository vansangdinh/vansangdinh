import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('student')
export class student{

 @PrimaryGeneratedColumn()   
id:number;
@Column()
Name:string;
@Column()
Address:string;
@Column()
Phone:string;
@Column()
Email:string;

}