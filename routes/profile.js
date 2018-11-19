const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


// Load Validation
const validateProfileInput = require('../validation/profile');
const validateExperienceInput = require('../validation/experience');
const validateEducationInput = require('../validation/education');

// Load Profile Model
const Profile = require('../../models/Profile');
// Load User Model
const User = require('../../models/User');

// route   GET profile/test
// desc    Tests profile route
// access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' ***REMOVED***));

// route   GET /profile
// desc    Get current users profile
// access  Private
router.get(
    '/',
    passport.authenticate('jwt', { session: false ***REMOVED***),
    (req, res) => {
      const errors = {***REMOVED***;
  
      Profile.findOne({ user: req.user.id ***REMOVED***)
        .populate('user', ['name', 'avatar'])
        .then(profile => {
          if (!profile) {
            errors.noprofile = 'There is no profile for this user';
            return res.status(404).json(errors);
          ***REMOVED***
          res.json(profile);
        ***REMOVED***)
        .catch(err => res.status(404).json(err));
    ***REMOVED***
  );
  
