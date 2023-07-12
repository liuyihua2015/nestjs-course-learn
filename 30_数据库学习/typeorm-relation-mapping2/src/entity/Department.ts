import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Employee } from "./Employee";

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    name: string

    // 不过一对多关系更多还是在一的那一方来保持关系，我们改下 Department：
    // 这里要通过第二个参数指定外键列在 employee.department 维护。
    @OneToMany(() => Employee, (employee) => employee.department, {
        cascade: true
    })
    employees: Employee[];

}
