import { DataSource } from "typeorm";
import { User } from "../../types/models/userEntity";

const appDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "notion_connection_api",
    password: "kiMyUzpP",
    database: "postgres",
    entities: [User],
    synchronize: true,
    logging: true,
});

const initializeDB = async () => {
    await appDataSource.initialize();
}

export { initializeDB, appDataSource };

