# Authentication App

<h3>Facebook authentication didn't work with this application. Because facebook didn't allow http requests. If you want to authenticate with facebook you have to buy and setup a domain first, then you can authenticate with facebook. Other authentication methods are working fine.</h3>

<h4>
    You have to create javascript file called "passort.js" using given code and relocate that file using given location
</h4>

<h4>
    /backend/passport.js
</h4>

<h1> This is Passport.js File </h1>

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require("passport-github2").Strategy
const FacebookStrategy = require("passport-facebook").Strategy
const passport = require("passport")


const GOOGLE_CLIENT_ID = "YOUR GOOGLE CLIENT ID"
const GOOGLE_CLIENT_SECRET = "YOUR GOOGLE CLIENT SECRET"

const GITHUB_CLIENT_ID = "YOUR GITHUB CLIENT ID"
const GITHUB_CLIENT_SECRET = "YOUR GITHUB CLIENT SECRET"

//Facebook authentication didn't work with HTTP requests
const FACEBOOK_CLIENT_ID = "YOUR FACEBOOK CLIENT ID"
const FACEBOOK_CLIENT_SECRET = "YOUR FACEBOOK CLIENT SECRET"


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
