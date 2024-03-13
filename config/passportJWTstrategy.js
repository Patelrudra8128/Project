const passport = require('passport');
const AdminTbl = require('../models/AdminTbl');

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'rudra';

passport.use(new JwtStrategy(opts,async function(jwt_payload, done) {
    try{
        let user = await AdminTbl.findOne({id : jwt_payload.payload.id});
        if(user){
            done(null,user);
        }else{
            done(null,false);
        }
    }catch(err){
        console.log(err);
        return false;
    }
}));