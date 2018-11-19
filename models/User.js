const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    ***REMOVED***,
    email: {
        type: String,
        require: true
    ***REMOVED***,
    password: {
        type: String,
        require: true
    ***REMOVED***,
    avatar: {
        type: String
    ***REMOVED***,
    date: {
        type: Date,
        default: Date.now
    ***REMOVED***

***REMOVED***);

module.exports = User = mongoose.model('users', UserSchema)