import { createConnection } from "typeorm"

export const testConn = (drop: boolean = false) =>{
    return createConnection({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "mini2409",
    database: "postgresTest",
    synchronize: drop,
    dropSchema: drop,
    entities: [__dirname + "/../entity/*.*"]
    })
}