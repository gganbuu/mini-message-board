import { pool } from "./pool.js";

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows;
}

export const db = {
    getAllMessages,
}