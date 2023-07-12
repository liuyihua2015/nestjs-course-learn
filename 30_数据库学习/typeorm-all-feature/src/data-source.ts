import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Aaa } from "./entity/Aaa"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3309,
    username: "root",
    password: "liuyihua",
    database: "practice",
    synchronize: true,
    logging: true,
    entities: [User,Aaa],
    migrations: [],
    subscribers: [],
    poolSize: 10,
    connectorPackage: 'mysql2',
    extra: {
        authPlugin: 'sha256_password',
    }
})

