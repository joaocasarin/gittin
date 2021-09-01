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

        await Promise.all(entities.map(async (entity) => {
            const repository = connection.getRepository(entity.name);
            await repository.query(`DELETE FROM ${entity.tableName} WHERE email = 'joao@123.com'`);
        }));
    }
};

export {
    connection
}