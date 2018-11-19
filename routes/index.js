const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Post model
const Post = require('../../models/Post');
// Profile model
const Profile = require('../../models/Profile');

router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));
