const { connect, connection } = require('mongoose');
require('dotenv').config();


// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const uri = process.env.DB_URI;
  //  || 'mongodb://127.0.0.1:27017/socialDB';

connect(uri, {
  dbName: process.env.DB_NAME,
  // user: process.env.DB_USER,
  // pass: process.env.DB_PASSWORD,
  // strictQuery: false,
    // useFineAndModify: false,
  // useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB') ) 
.catch(err => console.error(err.message));

module.exports = connection;
