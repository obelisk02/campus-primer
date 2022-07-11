"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//Express app
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.send(" typescript1");
});
app.get('/hello', (req, res) => {
    let name = req.query.name;
    if (!name) {
        name = "Anonimo";
    }
    res.status(200).json({
        data: "ok",
        message: "Hola, " + name
    });
});
app.get('/bye', (req, res) => {
    res.status(200).json({
        data: "ok",
        message: "Goodbye, world"
    });
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//# sourceMappingURL=index.js.map