import { Router } from "express";
import * as messagesController from "../controllers/messagesController.js";

export const messagesRouter = Router()


messagesRouter.get("/", messagesController.getAllMessages)

messagesRouter.post("/new", messagesController.postNewMessage)
