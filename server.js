const express = require('express');
const connectDB = require('./config/db');

const app = express();

//bodyParser middleware
app.use(express.json({ extended: false }));

//connect to mongoDB
connectDB();

//bringing in the routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const auth = require('./routes/api/auth');
//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/auth', auth);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server listening on port ${port}`));
