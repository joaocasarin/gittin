module.exports = {
    "type": "postgres",
    "ssl": process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    "url": process.env.DATABASE_URL,
    "entities": ["dist/entities/*.js"], // typeorm loads entities from this directory
    "migrations": ["dist/database/migrations/*.js"], // typeorm loads migrations from the directory
    "cli": {
        "migrationsDir": "src/database/migrations", // typeorm creates migrations in this directory
        "entitiesDir": "src/entities" // typeorm creates entities in this directory
    }
}