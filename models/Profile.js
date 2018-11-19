const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref: 'users'
    ***REMOVED***,
    location: {
        type: String
    ***REMOVED***,
    status: {
        type: String,
        required:true
    ***REMOVED***,
    goals: {
        type: [String]
    ***REMOVED***,
    bio: {
        type: String
    ***REMOVED***,
    fitbitusername: {
        type:String
    ***REMOVED***,
    social: {
        youtube:{
            type: String
        ***REMOVED***,
        twitter:{
            type: String
        ***REMOVED***,
        facebook:{
            type: String
        ***REMOVED***,
        linkedin:{
            type: String
        ***REMOVED***,
        Instagram:{
            type: String
        ***REMOVED***
    ***REMOVED***,
    date:{
        type: Date,
        default: Date.now
    ***REMOVED***
    
    
    ***REMOVED***);
    



    module.exports = Profile = mongoose.model('profile', ProfileSchema)