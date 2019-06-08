import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github';

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://127.0.0.1:4000/auth/github/callback',
    },
    function(accessToken, refreshToken, profile, cb) {
      console.log(accessToken, refreshToken, profile);
      return cb(null, { accessToken, refreshToken, profile });
      // User.findOrCreate({ githubId: profile.id }, function(err, user) {
      //   return cb(err, user);
      // });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

export default passport;
