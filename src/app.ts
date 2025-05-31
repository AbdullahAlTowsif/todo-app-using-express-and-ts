import express, { Application, Request, Response } from 'express'
const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.send('I am learning express.js with typescript!!');
})

export default app;

/**
 * Basic file structure for this project
 * server --> server handling like - starting, closing, error handling of server. only related to server
 * app --> routing handle, middleware, route related error
 * app folder --> app business logic handling like - create, read, update, delete and database related works.
 */