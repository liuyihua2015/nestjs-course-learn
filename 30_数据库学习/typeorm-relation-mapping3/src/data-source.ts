import "reflect-metadata"
import { DataSource } from "typeorm"
import { Article } from "./entity/Article"
import { Tag } from "./entity/Tag"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3309,
    username: "root",
    password: "liuyihua",
    database: "typeorm_test",
    synchronize: true,
    logging: true,
    entities: [Article, Tag],
    migrations: [],
    subscribers: [],
    poolSize: 10,
    connectorPackage: 'mysql2',
    extra: {
        authPlugin: 'sha256_password',
    }
})
