import { ConnectionOptions } from "typeorm";
import AllMigrations from "../database/migrations";
import AllEntities from "../entities";

export const databaseConfigs = {
    type: "postgres",
    ssl: process.env.NODE_ENV === 'production'
        && process.env.DATABASE_URL !== 'postgres://postgres:docker@localhost:5432/gittin'
        && process.env.DATABASE_URL !== 'postgres://postgres:docker@db:5432/gittin' ? { rejectUnauthorized: false } : false,
    url: process.env.DATABASE_URL,
    entities: AllEntities,
    migrations: AllMigrations,
    dropSchema: process.env.NODE_ENV === 'test' ? false : false,
    migrationsRun: process.env.NODE_ENV !== 'production' ? true : false

} as ConnectionOptions;