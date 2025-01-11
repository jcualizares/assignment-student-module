import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'student'})
export class Student {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;

    @Column({unique: true})
    email: string;

    @Column({ type: 'date' })
    enrollmentDate: Date;

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date;







}