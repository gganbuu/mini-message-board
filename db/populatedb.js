import { Client } from "pg";

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR (255),
        message TEXT,
        date_time TIMESTAMPTZ
    );

    INSERT INTO messages (username, message, date_time)
    VALUES
        ('gganbuu',
        'Hello World! This is the first message of my chatbox!',
        NOW());
`;

import "dotenv/config";

async function main() {
    console.log("seeding...");
    const client = new Client({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main()