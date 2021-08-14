module.exports = {
    "type": "postgres",
    "ssl": process.env.NODE_ENV === 'production'
           && process.env.DATABASE_URL !== 'postgres://postgres:docker@localhost:5432/gittin'
           && process.env.DATABASE_URL !== 'postgres://postgres:docker@db:5432/gittin' ? { rejectUnauthorized: false } : false,

    "url": process.env.DATABASE_URL,
    
    "entities": process.env.NODE_ENV === "production" ? 
            ["dist/entities/*.js"] : 
            ["src/entities/*.ts"], // typeorm loads entities from this directory

    "migrations": process.env.NODE_ENV === "production" ? 
            ["dist/database/migrations/*.js"] : 
            ["src/database/migrations/*.ts"], // typeorm loads migrations from the directory

    "dropSchema": process.env.NODE_ENV === 'test' ? false : false,
    "migrationsRun": process.env.NODE_ENV !== 'production' ? true : false,

    "cli": {
        "migrationsDir": "src/database/migrations", // typeorm creates migrations in this directory
        "entitiesDir": "src/entities" // typeorm creates entities in this directory
    }
}