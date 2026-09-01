import express from 'express'
import path from 'node:path'

const PORT = process.env.APP_PORT || 3000;
const app = express();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// setting views root path.  
app.set("views", path.join(import.meta.dirname, "views"));

// setting assets path for styles
const assetsPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetsPath));

// parses data into the form via request body 
app.use(express.urlencoded({ extended: true }));

// setting views engine.
app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("index", {messages: messages});
})

app.post("/new", (req, res) => {
  messages.push({ text: req.body.message , user: req.body.name, added: new Date() });
  res.redirect("/")
})


app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
});
