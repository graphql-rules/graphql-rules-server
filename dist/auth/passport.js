"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var passport_github_1 = require("passport-github");
passport_1.default.use(new passport_github_1.Strategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://127.0.0.1:4000/auth/github/callback',
}, function (accessToken, refreshToken, profile, cb) {
    console.log(accessToken, refreshToken, profile);
    return cb(null, { accessToken: accessToken, refreshToken: refreshToken, profile: profile });
    // User.findOrCreate({ githubId: profile.id }, function(err, user) {
    //   return cb(err, user);
    // });
}));
passport_1.default.serializeUser(function (user, done) {
    done(null, user);
});
passport_1.default.deserializeUser(function (user, done) {
    done(null, user);
});
exports.default = passport_1.default;
