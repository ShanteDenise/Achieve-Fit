const express = require('express')
const router = express.Router();
const User = require('../../models/User')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/key')
const passport = require('passport')


//Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login')



//@route Get /users/test
//@desc tests users route
//@access Public 
router.get('/test', (req, res) => res.json({msg: "Users works"***REMOVED***));

//@route Get api/users/register
//desc Register user
//@access Public
router.post('/register', (req, res) => {
    const { errors, isValid***REMOVED*** = validateRegisterInput(req.body);
    
