import { Pool } from "pg";

module.exports = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DB,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})