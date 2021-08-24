module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,

    "ssl": process.env.NODE_ENV === 'production'
        && process.env.DATABASE_URL !== process.env.LOCALHOST
        && process.env.DATABASE_URL !== process.env.DB ? { rejectUnauthorized: false } : false,

    "entities": ["src/entities/*.ts"],
    "migrations": ["src/database/migrations/*.ts"],

    "dropSchema": process.env.NODE_ENV === 'test' ? true : false,
    "migrationsRun": process.env.NODE_ENV !== 'production' ? true : false,
    
    "cli": {
        "migrationsDir": "src/database/migrations", // typeorm creates migrations in this directory
        "entitiesDir": "src/entities" // typeorm creates entities in this directory
    }
}