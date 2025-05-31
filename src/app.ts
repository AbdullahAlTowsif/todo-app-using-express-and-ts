import express, { Application, Request, Response } from 'express'
const app: Application = express();
import fs from "fs";
import path from 'path';

app.use(express.json());

const todosRouter = express.Router();

// app.use('/todos', todosRouter);

todosRouter.get('/all-todos', (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, {encoding: "utf-8"});
  console.log("From todosRouter");
  res.json({
    message: "From todos router",
    data
  });
});

const filePath = path.join(__dirname, "../db/todo.json");

app.get('/', (req: Request, res: Response) => {
  res.send('I am learning express.js with typescript!!');
});


app.get('/todos/all-todos', (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, {encoding: "utf-8"});
  console.log("From app router");
  res.json(data);
});


app.post('/todos/create-todo', (req: Request, res: Response) => {
  const {title, body} = req.body;
  console.log(title, body);
  res.send("Hello Data");
});

export default app;

/**
 * Basic file structure for this project
 * server --> server handling like - starting, closing, error handling of server. only related to server
 * app --> routing handle, middleware, route related error
 * app folder --> app business logic handling like - create, read, update, delete and database related works.
 */