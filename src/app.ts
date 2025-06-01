import express, { Application, NextFunction, request, Request, response, Response } from 'express'
const app: Application = express();
import { todosRouter } from './app/todos/todos.routes';

app.use(express.json());

app.use('/todos', todosRouter);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log("I am custom middleware");
  console.log({
    url: req.url,
    method: req.method,
    head: req.header
  });
  next();
},
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(something);
      res.send("Welcome to ToDo App");
    }
    catch (error) {
      next(error);
    }
  });

app.get('/error', async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(something);
    res.send("Welcome to ToDo App");
  }
  catch (error) {
    next(error)
  }
});
// 404 error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({message: "Sorry can't find that route!"})
})

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log("Error", error);
    res.status(400).json({ message: "Something went wrong from global error handler", error })
  }
})

export default app;

/**
 * Basic file structure for this project
 * server --> server handling like - starting, closing, error handling of server. only related to server
 * app --> routing handle, middleware, route related error
 * app folder --> app business logic handling like - create, read, update, delete and database related works.
 */