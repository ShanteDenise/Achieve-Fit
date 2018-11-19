const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose =require('mongoose');
const User = mongoose.model('users')
const key = require('../config/key');


const opts = {***REMOVED***;
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
            .then(user => {
                if(user){
                    return done (null, user);
                ***REMOVED***
                return done(null, false);
            ***REMOVED***)
            .catch(err => console.log(err));
            console.log(jwt_payload);
    ***REMOVED***)
    );
***REMOVED***;
