import { Router } from "express";
import * as messagesController from "../controllers/messagesController.js";

export const messagesRouter = Router()


// app.post("/new", (req, res) => {
//   messages.push({ text: req.body.message , user: req.body.name, added: new Date() });
//   res.redirect("/")
// })


messagesRouter.get("/", messagesController.getAllMessages)

