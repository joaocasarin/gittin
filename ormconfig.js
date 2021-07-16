module.exports = {
    "type": "postgres",
    "ssl": process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    "url": process.env.DATABASE_URL,
    "entities": ["dist/entities/*.js"],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/entities"
    }
}