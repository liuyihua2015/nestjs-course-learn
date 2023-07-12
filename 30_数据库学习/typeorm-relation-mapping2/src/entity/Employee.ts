import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Department } from "./Department";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @JoinColumn({
        name: 'd_id'
    })

    //一对多
    @ManyToOne(() => Department, {
        // cascade: true
    })
    department: Department;
}
