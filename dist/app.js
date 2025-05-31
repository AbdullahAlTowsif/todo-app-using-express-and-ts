"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const todos_routes_1 = require("./app/todos/todos.routes");
app.use(express_1.default.json());
app.use('/todos', todos_routes_1.todosRouter);
app.get('/', (req, res) => {
    res.send('I am learning express.js with typescript!!');
});
exports.default = app;
/**
 * Basic file structure for this project
 * server --> server handling like - starting, closing, error handling of server. only related to server
 * app --> routing handle, middleware, route related error
 * app folder --> app business logic handling like - create, read, update, delete and database related works.
 */ 
