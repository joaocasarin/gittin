module.exports = {
    "type": "postgres",
    "ssl": process.env.NODE_ENV === 'production'
           && process.env.DATABASE_URL !== 'postgres://postgres:docker@localhost:5432/gittin'
           && process.env.DATABASE_URL !== 'postgres://postgres:docker@db:5432/gittin' ? { rejectUnauthorized: false } : false,

    "url": process.env.DATABASE_URL,
    
    "entities": ["dist/entities/*.js"], // typeorm loads entities from this directory
    "migrations": ["dist/database/migrations/*.js"], // typeorm loads migrations from the directory

    "dropSchema": process.env.NODE_ENV === 'test' ? true : false,
    "migrationsRun": process.env.NODE_ENV !== 'production' ? true : false,

    "cli": {
        "migrationsDir": "src/database/migrations", // typeorm creates migrations in this directory
        "entitiesDir": "src/entities" // typeorm creates entities in this directory
    }
}