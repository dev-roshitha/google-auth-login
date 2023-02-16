const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport")


const GOOGLE_CLIENT_ID = "63310492014-f8rdqk9svv50litvkrd8dtajb3a9gm3q.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
},
    function(accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.serializeUser((user, done)=>{
    done(null, user)
})

passport.deserializeUser((user, done)=>{
    done(null, user)
})