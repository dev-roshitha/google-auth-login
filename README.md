# Authentication App

<h3>Facebook authentication didn't work with this application. Because facebook didn't allow http requests. If you want to authenticate with facebook you have to buy and setup a domain first, then you can authenticate with facebook. Other authentication methods are working fine.</h3>



<h1> This is Passport.js File </h1>

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require("passport-github2").Strategy
const FacebookStrategy = require("passport-facebook").Strategy
const passport = require("passport")


const GOOGLE_CLIENT_ID = "63310492014-f8rdqk9svv50litvkrd8dtajb3a9gm3q.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "4e9e04a2a018fe34dd13"
const GITHUB_CLIENT_SECRET = "3c1cb49ddb6ff140047b2bb81d600ad77e116a87"

//Facebook authentication didn't work with HTTP requests
const FACEBOOK_CLIENT_ID = ""
const FACEBOOK_CLIENT_SECRET = ""


//Google
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
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


//Github
passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    function(accessToken, refreshToken, profile, done) {
            done(null, profile)
        }
    )
);


//Facebook
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback"
},
    function(accessToken, refreshToken, profile, done) {
            done(null, profile)
        }
    )
);
