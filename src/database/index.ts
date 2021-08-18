import { createConnection } from "typeorm";
import { databaseConfigs } from "../configs/databaseConfigs";

const connection = createConnection(databaseConfigs);

export {
    connection
}