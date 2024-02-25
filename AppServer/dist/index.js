"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/your-db";
app.use(express_1.default.json);
mongoose_1.default
    .connect(MONGODB_URI)
    .then((res) => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => console.log(`Server is running on: ${process.env.PORT}`));
});
