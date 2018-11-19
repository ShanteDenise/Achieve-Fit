const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post model
const Post = require('../models/Post');
// Profile model
const Profile = require('../models/Profile');

// Validation
const validatePostInput = require('../validation/post');

// route   GET posts/test
// desc    Tests post route
// access  Public
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' ***REMOVED***));

// route   GET /posts
// desc    Get posts
// access  Public
router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 ***REMOVED***)
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' ***REMOVED***));
***REMOVED***);

// route   GET posts/:id
// desc    Get post by id
// access  Public
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: 'No post found with that ID' ***REMOVED***)
    );
***REMOVED***);

// route   POST api/posts
// desc    Create post
// access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false ***REMOVED***),
  (req, res) => {
    const { errors, isValid ***REMOVED*** = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    ***REMOVED***

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    ***REMOVED***);

    newPost.save().then(post => res.json(post));
  ***REMOVED***
);

// route   DELETE /posts/:id
// desc    Delete post
// access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false ***REMOVED***),
  (req, res) => {
    Profile.findOne({ user: req.user.id ***REMOVED***).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check for post owner
          if (post.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' ***REMOVED***);
          ***REMOVED***

          // Delete
          post.remove().then(() => res.json({ success: true ***REMOVED***));
        ***REMOVED***)
        .catch(err => res.status(404).json({ postnotfound: 'No post found' ***REMOVED***));
    ***REMOVED***);
  ***REMOVED***
);

// route   POST posts/like/:id
// desc    Like post
// access  Private
router.post(
  '/like/:id',
  passport.authenticate('jwt', { session: false ***REMOVED***),
  (req, res) => {
    Profile.findOne({ user: req.user.id ***REMOVED***).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: 'User already liked this post' ***REMOVED***);
          ***REMOVED***

          // Add user id to likes array
          post.likes.unshift({ user: req.user.id ***REMOVED***);

          post.save().then(post => res.json(post));
        ***REMOVED***)
        .catch(err => res.status(404).json({ postnotfound: 'No post found' ***REMOVED***));
    ***REMOVED***);
  ***REMOVED***
);

// route   POST posts/unlike/:id
// desc    Unlike post
// access  Private
router.post(
  '/unlike/:id',
  passport.authenticate('jwt', { session: false ***REMOVED***),
  (req, res) => {
    Profile.findOne({ user: req.user.id ***REMOVED***).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length === 0
          ) {
            return res
              .status(400)
              .json({ notliked: 'You have not yet liked this post' ***REMOVED***);
          ***REMOVED***

          // Get remove index
          const removeIndex = post.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

          // Splice out of array
          post.likes.splice(removeIndex, 1);

          // Save
          post.save().then(post => res.json(post));
        ***REMOVED***)
        .catch(err => res.status(404).json({ postnotfound: 'No post found' ***REMOVED***));
    ***REMOVED***);
  ***REMOVED***
);

// route   POST posts/comment/:id
// desc    Add comment to post
// access  Private
router.post(
  '/comment/:id',
  passport.authenticate('jwt', { session: false ***REMOVED***),
  (req, res) => {
    const { errors, isValid ***REMOVED*** = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    ***REMOVED***

    Post.findById(req.params.id)
      .then(post => {
        const newComment = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id
        ***REMOVED***;

        // Add to comments array
        post.comments.unshift(newComment);

        // Save
        post.save().then(post => res.json(post));
      ***REMOVED***)
      .catch(err => res.status(404).json({ postnotfound: 'No post found' ***REMOVED***));
  ***REMOVED***
);

// route   DELETE posts/comment/:id/:comment_id
// desc    Remove comment from post
// access  Private
router.delete(
  '/comment/:id/:comment_id',
  passport.authenticate('jwt', { session: false ***REMOVED***),
  (req, res) => {
    Post.findById(req.params.id)
      .then(post => {
        // Check to see if comment exists
        if (
          post.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ commentnotexists: 'Comment does not exist' ***REMOVED***);
        ***REMOVED***

        // Get remove index
        const removeIndex = post.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);

        // Splice comment out of array
        post.comments.splice(removeIndex, 1);

        post.save().then(post => res.json(post));
      ***REMOVED***)
      .catch(err => res.status(404).json({ postnotfound: 'No post found' ***REMOVED***));
  ***REMOVED***
);

module.exports = router;
