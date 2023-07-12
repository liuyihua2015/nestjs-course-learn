import { In } from "typeorm";
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "liu111"
    // user.lastName = "yihua"
    // user.age = 20
    // user.id = 1
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

    // 批量插入用 save 方法：
    // await AppDataSource.manager.save(User, [
    //     { firstName: 'ccc', lastName: 'ccc', age: 21},
    //     { firstName: 'ddd', lastName: 'ddd', age: 22},
    //     { firstName: 'eee', lastName: 'eee', age: 23}
    // ]);

    // 批量更新也用 save 方法：
    // await AppDataSource.manager.save(User, [
    //     { id: 2 ,firstName: 'ccc111', lastName: 'ccc', age: 21},
    //     { id: 3 ,firstName: 'ddd222', lastName: 'ddd', age: 22},
    //     { id: 4, firstName: 'eee333', lastName: 'eee', age: 23}
    // ]);

    // 其实 EntityManager 还有 update 和 insert 方法，分别是修改和插入的，
    // 但是它们不会先 select 查询一次。而 save 方法会先查询一次数据库来确定是插入还是修改。

    // 删除和批量删除用 delete 方法：
    // await AppDataSource.manager.delete(User, 1);
    // await AppDataSource.manager.delete(User, [2, 3]);


    // 而查询是使用 find 方法：

    // await AppDataSource.manager.save(User, [
    //     { firstName: 'ccc', lastName: 'ccc', age: 25 },
    //     { firstName: 'ddd', lastName: 'ddd', age: 22 },
    //     { firstName: 'eee', lastName: 'eee', age: 23 }
    // ]);

    // const users = await AppDataSource.manager.find(User);
    // console.log(users);

    // // 也可以通过 findBy 方法根据条件查询：
    // const users1 = await AppDataSource.manager.findBy(User, {
    //     age: 23
    // });
    // console.log(users1);

    // // 此外，你还可以用 findAndCount 来拿到有多少条记录：

    // const [users2, count] = await AppDataSource.manager.findAndCount(User);
    // console.log(users, count);
    //count 是可以指定条件的：

    // const [users, count] = await AppDataSource.manager.findAndCountBy(User, {
    //     age: 23
    // })
    // console.log(users, count);

    // 除了可以查询多条，还可以查询一条，使用 findOne：
    // findOne 只是比 find 多加了个 LIMIT 1，其余的都一样。

    // const user = await AppDataSource.manager.find(User, {
    //     select: {
    //         firstName: true,
    //         age: true
    //     },
    //     where: {
    //         id: In([4, 8])
    //     },
    //     order: {
    //         id: 'DESC'
    //     }

    // });
    // console.log(user);

    // 通过 findOneBy 也可以：

    // const user = await AppDataSource.manager.findOneBy(User, {
    //     id: 4
    // });
    // console.log(user);

    // 此外，findOne 还有两个特殊的方法：

    // try {
    //     const user = await AppDataSource.manager.findOneOrFail(User, {
    //         where: {
    //             id: 666
    //         }
    //     });
    //     console.log(user);
    // } catch (e) {
    //     console.log(e);
    //     console.log('没找到该用户');
    // }
    // findOneOrFail 或者 findOneByOrFail，如果没找到，会抛一个 EntityNotFoundError 的异常：

    // 此外，你还可以用 query 方法直接执行 sql 语句：

    // const users = await AppDataSource.manager.query('select * from user where age in(?, ?)', [21, 22]);
    // console.log(users);

    // 但复杂 sql 语句不会直接写，而是会用 query builder：

    // const users = await AppDataSource.manager.createQueryBuilder(User, 'user')
    //     .select(['user.id', 'user.firstName'])
    //     .where('user.age = :age', { age: 22 })
    //     .getMany();
    // console.log(users);


    const queryBuilder = await AppDataSource.manager.createQueryBuilder();

    const user = await queryBuilder.select("user")
        .from(User, "user")
        .where("user.age = :age", { age: 22 })
        .getOne();

    console.log(user);










}).catch(error => console.log(error))
