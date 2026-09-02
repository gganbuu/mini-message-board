import { pool }  from "./pool.js";

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows;
}

async function postNewMessage({username, message}) {
    await pool.query("INSERT INTO messages (username, message, date_time) VALUES ($1, $2, NOW())", [username, message])
}

export const db = {
    getAllMessages,
    postNewMessage
}