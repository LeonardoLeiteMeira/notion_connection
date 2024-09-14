import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    fullName:string;

    @Column({length:100})
    email:string;

    @Column()
    birthDate: Date;

    @CreateDateColumn()
    createdAt: Date = new Date(Date.now())

    @DeleteDateColumn()
    deletecAt: Date | null = null;
}