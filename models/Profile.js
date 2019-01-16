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
    education: [
        {
        school: {
                type:String,
                required:true
        },
        degree: {
            type:String
        },
        fieldofstudy:{
            type:String
        },
        from:{
            type: Date,
            required: true
        },
        to:{
            type: Date
        },
        current:{
            type: Boolean,
            default:false
        },
        description: {
            type:String
        }  
    }
    ],
     
    date:{
        type: Date,
        default: Date.now
    }
    
    
    });
    



    module.exports = Profile = mongoose.model('profile', ProfileSchema)