import { AppDataSource } from "./data-source"
import { Department } from "./entity/Department";
import { Employee } from "./entity/Employee";


AppDataSource.initialize().then(async () => {


    // const e1 = new Employee();
    // e1.name = '张三';

    // const e2 = new Employee();
    // e2.name = '李四';

    // const e3 = new Employee();
    // e3.name = '王五';

    // const d1 = new Department();
    // d1.name = '技术部';
    // d1.employees = [e1, e2, e3];

    // AppDataSource.manager.save(Department, d1);

    const deps = await AppDataSource.manager.find(Department);
    console.log(deps);

    // 关联查询
    const deps2 = await AppDataSource.manager.find(Department, {
        // relations: ['employees']
        // 这个 relations 其实就是 left join on，或者通过 query builder 来手动关联：

        relations: {
            employees: true
        }
    });
    console.log(deps2);
    console.log(deps2.map(d => d.employees));

    // 通过 query builder 来手动关联：
    const deps3 = await AppDataSource.manager.getRepository(Department)
        .createQueryBuilder('d')
        .leftJoinAndSelect('d.employees', 'e')
        .getMany();
    console.log(deps3);
    console.log(deps3.map(d => d.employees));




}).catch(error => console.log(error))
