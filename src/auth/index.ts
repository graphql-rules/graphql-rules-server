import express from 'express';
import passport from './passport';

export default function getAuthRouter() {
  const router = express.Router();

  router.get('/github', passport.authenticate('github'));

  router.get(
    '/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    }
  );

  return router;
}
