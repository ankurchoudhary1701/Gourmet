// const mongoose =require('mongoose')

// const{schema} = mongoose;
// const UserSchema = new Schema({
//     name :{
//         type: String,
//         required: true,
//     },
//     location:{
//         type: String,
//         required: true
//     },
//     email:{
//         type: String,
//         required: true
//     },
//     passward:{
//         type: String,
//         required: true
//     },
//     date:{
//         type:Date,
//         default:Date.now
//     }
// });
// module.exports = mongoose.model('user',UserSchema)



// ================================================================
// const mongoose = require('mongoose');

// // Extract Schema from mongoose
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     location: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     password: { // Corrected "passward" to "password" for consistency
//         type: String,
//         required: true,
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     },
// });

// // Export the model
// module.exports = mongoose.model('User', UserSchema); // 'User' is the model name, and will map to the 'users' collection




// ================================================
// const mongoose = require('mongoose'); // Import mongoose

// // Extract Schema from mongoose
// const { Schema } = mongoose;

// // Define the User Schema
// const UserSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     location: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     password: { // Corrected 'passward' to 'password'
//         type: String,
//         required: true,
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     },
// });

// // Export the model
// module.exports = mongoose.model('User', UserSchema);

// =============================
// const mongoose = require('mongoose'); //this code is ok till vid 07

// // Define the User schema
// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true, // Ensures no duplicate emails
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Export the model
// module.exports = mongoose.model('User', UserSchema);
// =========================================================vid12
// === Users.js ===
// const mongoose = require('mongoose');

// const { Schema } = mongoose;

// const UserSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     location: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = mongoose.model('User', UserSchema);

















const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true // Ensure this field is required
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);
