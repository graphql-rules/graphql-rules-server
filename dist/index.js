"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express_1 = __importDefault(require("express"));
var express_session_1 = __importDefault(require("express-session"));
var auth_1 = __importDefault(require("./auth"));
var passport_1 = __importDefault(require("./auth/passport"));
var PORT = process.env.PORT;
var app = express_1.default();
// app.use(cookieParser);
app.use(express_session_1.default({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use('/auth', auth_1.default());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(PORT, function () {
    console.log("\uD83D\uDE80 Server ready at http://localhost:" + PORT);
});
