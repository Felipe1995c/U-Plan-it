//enforce strict mode for robust code
'use strict';

//import respective model
const { User } = require('../models');

//accesses environmental variables
require('dotenv').config()

const userData = [
    {
        username: process.env.USER_USERNAME,
        password: process.env.USER_PASSWORD,
        email: process.env.USER_EMAIL
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
