const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const users = require('./routes/users')
const posts = require('./routes/post')
const profile = require('./routes/profile')
const passport = require('passport')

const app = express();


//body parser middleware
app.use(bodyParser.urlencoded({extended:false***REMOVED***));
app.use(bodyParser.json());

const db = require('./config/key').mongoURI;

//Connect to mongodb
mongoose.connect(db).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

//Passport Middlewear
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);

// app.get('/', (req, res) => console.log('Hello'))
app.use('/users', users);
app.use('/profile', profile);
app.use('/posts', posts);


app.get('/', (req, res) => {
 res.sendFile(__dirname + '/client/build/index.html')
***REMOVED***)

app.get('/*', (req, res) => {
 res.sendFile(__dirname + '/client/build/index.html')
***REMOVED***)

const port = process.env.PORT ||3001;

app.listen(port, () => console.log(`Server running on port ${port***REMOVED***`));