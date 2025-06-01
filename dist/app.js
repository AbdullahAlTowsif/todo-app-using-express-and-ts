"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const todos_routes_1 = require("./app/todos/todos.routes");
app.use(express_1.default.json());
app.use('/todos', todos_routes_1.todosRouter);
app.get('/', (req, res, next) => {
    console.log("I am custom middleware");
    console.log({
        url: req.url,
        method: req.method,
        head: req.header
    });
    next();
}, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(something);
        res.send("Welcome to ToDo App");
    }
    catch (error) {
        next(error);
    }
}));
app.get('/error', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(something);
        res.send("Welcome to ToDo App");
    }
    catch (error) {
        next(error);
    }
}));
// 404 error handler
app.use((req, res, next) => {
    res.status(404).json({ message: "Sorry can't find that route!" });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        console.log("Error", error);
        res.status(400).json({ message: "Something went wrong from global error handler", error });
    }
});
exports.default = app;
/**
 * Basic file structure for this project
 * server --> server handling like - starting, closing, error handling of server. only related to server
 * app --> routing handle, middleware, route related error
 * app folder --> app business logic handling like - create, read, update, delete and database related works.
 */ 
