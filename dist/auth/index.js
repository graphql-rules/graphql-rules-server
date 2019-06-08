"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var passport_1 = __importDefault(require("./passport"));
function getAuthRouter() {
    var router = express_1.default.Router();
    router.get('/github', passport_1.default.authenticate('github'));
    router.get('/github/callback', passport_1.default.authenticate('github', { failureRedirect: '/login' }), function (req, res) {
        res.redirect('/');
    });
    return router;
}
exports.default = getAuthRouter;
