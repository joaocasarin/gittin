module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": ["src/entities/*.ts"],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/entities"
    }
}