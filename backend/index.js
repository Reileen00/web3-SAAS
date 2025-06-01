"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const user_1 = __importDefault(require("./routers/user"));
const worker_1 = __importDefault(require("./routers/worker"));
//postgres + prisma => ORM
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOm51bGwsImlhdCI6MTc0ODU3MTIwOH0.1Co5U0zUOMN2ahG7ctdJyf97QXC5fwigHirVCTBlgEg"
exports.JWT_SECRET = "hello";
app.use("/v1/user", user_1.default);
app.use("v1/worker", worker_1.default);
app.listen(3000);
