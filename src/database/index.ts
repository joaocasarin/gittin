import { createConnection, getConnection } from "typeorm";
import { ormconfig } from "../configs/databaseConfigs";

const connection = {
    async create() {
        await createConnection(ormconfig);
    },

    async close() {
        await getConnection().close();
    },

    async clear() {
        const connection = getConnection();
        const entities = connection.entityMetadatas;

        entities.forEach(async (entity) => {
            const repository = connection.getRepository(entity.name);
            await repository.query(`TRUNCATE ${entity.tableName}`);
        });
    }
};

export {
    connection
}