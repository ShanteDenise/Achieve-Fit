const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/key');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

// route   GET /users/test
// desc    Tests users route
// access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' ***REMOVED***));

// route   POST /users/register
// desc    Register user
// access  Public
router.post('/register', (req, res) => {
  const { errors, isValid ***REMOVED*** = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  ***REMOVED***

  User.findOne({ email: req.body.email ***REMOVED***).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    ***REMOVED***
      const avatar = gravatar.url(req.body.email, {
        s: '300', //size of avatar
        r: 'pg', // Rating
        d: 'mm' // Default
      ***REMOVED***);

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      ***REMOVED***);

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        ***REMOVED***);
      ***REMOVED***);
    ***REMOVED***
  ***REMOVED***);
***REMOVED***);

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid ***REMOVED*** = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  ***REMOVED***

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

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
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


