const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref: 'users'
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required:true
    },
    goals: {
        type: [String]
    },
    bio: {
        type: String
    },
    fitbitusername: {
        type:String
    },
    social: {
        youtube:{
            type: String
        },
        twitter:{
            type: String
        },
        facebook:{
            type: String
        },
        linkedin:{
            type: String
        },
        Instagram:{
            type: String
        }
    },
    date:{
        type: Date,
        default: Date.now
    }
    
    
    });
    



    module.exports = Profile = mongoose.model('profile', ProfileSchema)