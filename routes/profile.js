const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


// Load Validation
const validateProfileInput = require('../validation/profile');
const validateEducationInput = require('../validation/education');

// Load Profile Model
const Profile = require('../models/Profile');
// Load User Model
const User = require('../models/User');

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

  //route profile/all
  //get all users profiles
  //access public

  router.get('/all', (req, res) => {
    const errors = {***REMOVED***;
  
    Profile.find()
      .populate('user', ['name', 'avatar'])
      .then(profiles => {
        if (!profiles) {
          errors.noprofile = 'There are no profiles';
          return res.status(404).json(errors);
        ***REMOVED***
  
        res.json(profiles);
      ***REMOVED***)
      .catch(err => res.status(404).json({ profile: 'There are no profiles' ***REMOVED***));
  ***REMOVED***);

// route   GET profile/user/:user_id
// desc    Get profile by user ID
// access  Public

router.get('/user/:user_id', (req, res) => {
    const errors = {***REMOVED***;
  
    Profile.findOne({ user: req.params.user_id ***REMOVED***)
      .populate('user', ['name', 'avatar'])
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          res.status(404).json(errors);
        ***REMOVED***
  
        res.json(profile);
      ***REMOVED***)
      .catch(err =>
        res.status(404).json({ profile: 'There is no profile for this user' ***REMOVED***)
      );
  ***REMOVED***);
  
  // route   POST /profile
  // desc    Create or edit user profile
  // access  Private
  router.post(
    '/',
    passport.authenticate('jwt', { session: false ***REMOVED***),
    (req, res) => {
      const { errors, isValid ***REMOVED*** = validateProfileInput(req.body);
  
      // Check Validation
      if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
      ***REMOVED***
  
      // Get fields
      const profileFields = {***REMOVED***;
      profileFields.user = req.user.id;
      if (req.body.handle) profileFields.handle = req.body.handle;
      if (req.body.location) profileFields.location = req.body.location;
      if (req.body.bio) profileFields.bio = req.body.bio;
      if (req.body.status) profileFields.status = req.body.status;
      if (req.body.fitbitusername)
        profileFields.fitbitusername = req.body.fitbitusername;
      // Skills - Spilt into array
      if (typeof req.body.goals !== 'undefined') {
        profileFields.goals = req.body.goals.split(',');
      ***REMOVED***
  
  
      Profile.findOne({ user: req.user.id ***REMOVED***).then(profile => {
        if (profile) {
          // Update
          Profile.findOneAndUpdate(
            { user: req.user.id ***REMOVED***,
            { $set: profileFields ***REMOVED***,
            { new: true ***REMOVED***
          ).then(profile => res.json(profile));
        ***REMOVED***
          // Create
  
          // Check if handle exists
          Profile.findOne({ handle: profileFields.handle ***REMOVED***).then(profile => {
            if (profile) {
              errors.handle = 'That handle already exists';
              res.status(400).json(errors);
            ***REMOVED***
  
            // Save Profile
            new Profile(profileFields).save()
            .then(profile => res.json(profile));
          ***REMOVED***);
        ***REMOVED***
      ***REMOVED***);
    ***REMOVED***
  );
  
  
  
  // route   POST profile/education
  // desc    Add education to profile
  // access  Private
  router.post(
    '/education',
    passport.authenticate('jwt', { session: false ***REMOVED***),
    (req, res) => {
      const { errors, isValid ***REMOVED*** = validateEducationInput(req.body);
  
      // Check Validation
      if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
      ***REMOVED***
  
      Profile.findOne({ user: req.user.id ***REMOVED***).then(profile => {
        const newEdu = {
          school: req.body.school,
          degree: req.body.degree,
          fieldofstudy: req.body.fieldofstudy,
          from: req.body.from,
          to: req.body.to,
          current: req.body.current,
          description: req.body.description
        ***REMOVED***;
  
        // Add to exp array
        profile.education.unshift(newEdu);
  
        profile.save().then(profile => res.json(profile));
      ***REMOVED***);
    ***REMOVED***
  );
   
  // route   DELETE profile/education/:edu_id
  // desc    Delete education from profile
  // access  Private
  router.delete(
    '/education/:edu_id',
    passport.authenticate('jwt', { session: false ***REMOVED***),
    (req, res) => {
      Profile.findOne({ user: req.user.id ***REMOVED***)
        .then(profile => {
          // Get remove index
          const removeIndex = profile.education
            .map(item => item.id)
            .indexOf(req.params.edu_id);
  
          // Splice out of array
          profile.education.splice(removeIndex, 1);
  
          // Save
          profile.save().then(profile => res.json(profile));
        ***REMOVED***)
        .catch(err => res.status(404).json(err));
    ***REMOVED***
  );
  
  // route   DELETE /profile
  // desc    Delete user and profile
  // access  Private
  router.delete(
    '/',
    passport.authenticate('jwt', { session: false ***REMOVED***),
    (req, res) => {
      Profile.findOneAndRemove({ user: req.user.id ***REMOVED***).then(() => {
        User.findOneAndRemove({ _id: req.user.id ***REMOVED***).then(() => 
        
          res.json({ success: true ***REMOVED***)
        );
      ***REMOVED***);
    ***REMOVED***
  );
  
  module.exports = router;
  
  
  
