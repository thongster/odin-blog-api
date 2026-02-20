import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import prisma from '../prisma/lib/prisma.js';
import { JwtStrategy, ExtractJwt } from 'passport-local';
import 'dotenv/config';

passport.use(
  new LocalStrategy(
    { usernameField: 'username' },
    async (username, password, done) => {
      try {
        const user = await prisma.user.findUnique({
          where: { username: username },
        });

        // if user does not exist
        if (!user) {
          return done(null, false, { message: 'Incorrect email' });
        }

        // password match
        const match = await bcrypt.compare(password, user.passwordHash);
        if (!match) {
          return done(null, false, { message: 'Incorrect password' });
        }

        console.log('login success');
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  }),
  async (payload, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: payload.id,
        },
      });

      // if user no longer exist
      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  },
);

export { passport };
