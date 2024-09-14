import { DataSource } from "typeorm";
import { User } from "../../types/models/userEntity"
import { Config } from "../../config.ts";

const config = Config.getInstance()

const appDataSource = new DataSource({
    type: "postgres",
    host: config.dbHost,
    port: config.dbPort,
    username: config.dbUsername,
    password: config.dbPassword,
    database: config.database,
    entities: [User],
    synchronize: true,
    logging: true,
});

const initializeDB = async () => {
    await appDataSource.initialize();
}

export { initializeDB, appDataSource };

