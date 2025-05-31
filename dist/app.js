"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
app.use(express_1.default.json());
const todosRouter = express_1.default.Router();
// app.use('/todos', todosRouter);
todosRouter.get('/all-todos', (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log("From todosRouter");
    res.json({
        message: "From todos router",
        data
    });
});
const filePath = path_1.default.join(__dirname, "../db/todo.json");
app.get('/', (req, res) => {
    res.send('I am learning express.js with typescript!!');
});
app.get('/todos/all-todos', (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log("From app router");
    res.json(data);
});
app.post('/todos/create-todo', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send("Hello Data");
});
exports.default = app;
/**
 * Basic file structure for this project
 * server --> server handling like - starting, closing, error handling of server. only related to server
 * app --> routing handle, middleware, route related error
 * app folder --> app business logic handling like - create, read, update, delete and database related works.
 */ 
