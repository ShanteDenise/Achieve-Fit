const express = require('express')
const router = express.Router();
const User = require('../models/User')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/key')
const passport = require('passport')


//Load Input Validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login')



//route Get /users/test
//desc tests users route
//access Public 
router.get('/test', (req, res) => res.json({msg: "Users works"***REMOVED***));

//route Get users/register
//desc Register user
//access Public
router.post('/register', (req, res) => {
    const { errors, isValid***REMOVED*** = validateRegisterInput(req.body);

     //check validation
     //If Not valid send a 400 error
     if(!isValid){
        return res.status(400).json(errors)
    ***REMOVED***
    //Find one user by email
    //If the user already exists return a 404 error
    //If user is not already created get gravator 
    //Save new User 
    //Encrypt password
    User.findOne({email: req.body.email***REMOVED***)
    .then(user => {
        if(user){
            return res.status(400).json({email: 'Email already exists'***REMOVED***);
        ***REMOVED***
            const avatar = gravatar.url(req.body.email, {
                s: '200',//size
                r: 'pg', //rating
                d: 'mm'//Default
            ***REMOVED***);
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar,
                password: req.body.password
                
            ***REMOVED***);
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                ***REMOVED***)

            ***REMOVED***)
        ***REMOVED***
    ***REMOVED***);
***REMOVED***);


//route Get users/login
//desc Login user / Returning JWT Token
//access Public
router.post('/login', (req, res) => {
    const { errors, isValid ***REMOVED*** = validateLoginInput(req.body);
  
    // Check Validation
    //If is not valid throw 404 error 
    if (!isValid) {
      return res.status(400).json(errors);
    ***REMOVED***
    //else 
    const email = req.body.email;
    const password = req.body.password;
  
    // Find user by email
    User.findOne({ email ***REMOVED***).then(user => {
      // Check for user
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      ***REMOVED***
  
      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User Matched
          const payload = { id: user.id, name: user.name, avatar: user.avatar ***REMOVED***; // Create JWT Payload
  
          // Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 ***REMOVED***,
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              ***REMOVED***);
            ***REMOVED***
          );
        ***REMOVED***
          errors.password = 'Password incorrect';
          return res.status(400).json(errors);
        ***REMOVED***
      ***REMOVED***);
    ***REMOVED***);
  ***REMOVED***);
  
  // route   GET users/current
  // desc    Return current user
  // access  Private
  router.get(
    '/current',
    passport.authenticate('jwt', { session: false ***REMOVED***),
    (req, res) => {
      res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
      ***REMOVED***);
    ***REMOVED***
  );
  
  module.exports = router;
    