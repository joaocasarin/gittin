module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,

    "ssl": process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,

    "entities": ["src/entities/*.ts"],
    "migrations": ["src/database/migrations/*.ts"],

    "dropSchema": process.env.NODE_ENV === 'test',
    "migrationsRun": process.env.NODE_ENV !== 'production',
    
    "cli": {
        "migrationsDir": "src/database/migrations", // typeorm creates migrations in this directory
        "entitiesDir": "src/entities" // typeorm creates entities in this directory
    }
}