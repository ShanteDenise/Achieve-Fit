const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
// const users = require('./routes/api/users')
// const posts = require('./routes/api/post')
// const profile = require('./routes/api/profile')
const passport = require('passport')

const app = express();


//body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const db = require('./config/key').mongoURI;

//Connect to mongodb
mongoose.connect(db).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

//Passport Middlewear
app.use(passport.initialize());

//passport config
// require('./config/passport')(passport);

app.get('/', (req, res) => console.log('Hello'))
// app.use('/users', users);
// app.use('/profile', profile);
// app.use('/posts', posts);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));