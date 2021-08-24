import { createConnection } from "typeorm";
import { ormconfig } from "../configs/databaseConfigs";

const connection = createConnection(ormconfig);

export {
    connection
}