const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String
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

     
    date:{
        type: Date,
        default: Date.now
    }
    
    
    });
    



    module.exports = Profile = mongoose.model('profile', ProfileSchema)