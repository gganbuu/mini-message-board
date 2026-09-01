import { db } from "../db/queries.js";

export async function getAllMessages(req, res) {
    const messages = await db.getAllMessages()
    res.render("index", {messages: messages})
}



