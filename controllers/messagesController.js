import { db } from "../db/queries.js";
import { body, validationResult, matchedData } from 'express-validator';

const messageErr = "must be less than 100 words"
const usernameErr = "must be less than 20 characters"

const validateMessage = [
    body("message")
        .trim().notEmpty().withMessage("Message is Required")
        .custom((value) => {
        const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
        if (wordCount > 100) {
            throw new Error(`Message ${messageErr}`);
            }
            return true;
        }),
    body("username")
        .isLength({min: 1, max: 20}).withMessage(`Username ${usernameErr}`)
]




export async function getAllMessages(req, res) {
    const messages = await db.getAllMessages()
    res.render("index", {messages: messages})
}


export const postNewMessage = [
    validateMessage,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const messages = await db.getAllMessages();
            return res.status(400).render("index", {
                messages,
                errors: errors.array(),
                data: req.body,
                modalOpen: true,
            });
        }
        const {username, message} = matchedData(req);
        await db.postNewMessage({username: username, message: message})
        res.redirect("/")
        
    }
]


