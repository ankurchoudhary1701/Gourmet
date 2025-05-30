

// =======================================================

// const express = require('express'); //vid 06 post through thunder client
// const router = express.Router();
// const User = require('../models/User'); // Import the User model


// router.post("/createuser", 

//   async(req, res) =>
//      {
   
//     try {
//         await User.create({
//             name: "ankur choudhary",
//             password: "12335", // Use 'password' to match the schema
//             email: "ankur@hotmail.com",
//             location: "qwerty",
//         });
//         res.json({ success: true });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false });
//     }
// });

// module.exports = router;

// =============================================


// =============================

// const express = require('express');  ///// vid 07(2) =ok , to link frontend and backend is done
// const router = express.Router();
// const User = require('../models/User'); // Import the User model
// const { body, validationResult } = require('express-validator');

// router.post(
//   "/createuser",
//   [
//     body('email').isEmail().withMessage('Invalid email address'),
//     body('name').isLength({ min: 3 }).withMessage('Name must be at least 5 characters long'),
//     body('password').isLength({ min: 3 }).withMessage('Password must be at least 5 characters long')
//   ],
//   async (req, res) => {
//     // Validate incoming data
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       // Create user in the database
//       await User.create({
//         name: req.body.name,
//         password: req.body.password, // Ensure this matches your schema
//         email: req.body.email,
//         location: req.body.location,
//       });

//       // Send success response
//       res.status(201).json({ success: true });
//     } catch (error) {
//       console.error("Error creating user:", error);

//       // Handle duplicate email error (11000)
//       if (error.code === 11000) {
//         return res.status(400).json({
//           success: false,
//           message: "Email already exists. Please use a different email.",
//         });
//       }

//       // Handle other errors
//       res.status(500).json({
//         success: false,
//         message: "Internal Server Error",
//         error: error.message,
//       });
//     }
//   }
// );

// module.exports = router;




// ==================================================
// const express = require('express');   //vid 07 complete code
// const router = express.Router();
// const User = require('../models/User'); // Import the User model
// const { body, validationResult } = require('express-validator');

// router.post(
//   "/createuser",
//   [
//     body('email').isEmail().withMessage('Invalid email address'),
//     body('name').isLength({ min: 3 }).withMessage('Name must be at least 5 characters long'),
//     body('password').isLength({ min: 3 }).withMessage('Password must be at least 5 characters long')
//   ],
//   async (req, res) => {
//     // Validate incoming data
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       // Create user in the database
//       await User.create({
//         name: req.body.name,
//         password: req.body.password, // Ensure this matches your schema
//         email: req.body.email,
//         location: req.body.location,
//       });

//       // Send success response
//       res.status(201).json({ success: true });
//     } catch (error) {
//       console.error("Error creating user:", error);

//       // Handle duplicate email error (11000)
//       if (error.code === 11000) {
//         return res.status(400).json({
//           success: false,
//           message: "Email already exists. Please use a different email.",
//         });
//       }

//       // Handle other errors
//       res.status(500).json({
//         success: false,
//         message: "Internal Server Error",
//         error: error.message,
//       });
//     }
//   }
// );
// // ================================================================for making login 



// router.post(                               //vid 07 complete code
//   "/loginuser",
//   [
//     body('email').isEmail().withMessage('Invalid email address'),
//     body('password').isLength({min:3}).withMessage('Password must be at least 3 characters long'),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { email, password } = req.body;

//     try {
//       // Check if the user exists
//       const userData = await User.findOne({ email });
//       if (!userData) {
//         return res.status(400).json({ error: "Invalid credentials" });
//       }

//       // Validate the password (assuming plaintext for now; ideally use bcrypt)
//       if (password !== userData.password) {
//         return res.status(400).json({ error: "Invalid credentials" });
//       }

//       // Respond with success if credentials match
//       return res.status(200).json({ success: true, message: "Login successful" });
//     } catch (error) {
//       console.error("Error during login:", error);
//       return res.status(500).json({
//         success: false,
//         message: "Internal Server Error",
//         error: error.message,
//       });
//     }
//   }
// );

// module.exports = router;










// ==================================

// const express = require('express');   //vid 08 complete this video
// const router = express.Router();
// const User = require('../models/User'); // Import the User model
// const { body, validationResult } = require('express-validator');

// const jwt =require("jsonwebtoken")
// const bcrypt = require("bcryptjs");
// const jwtSecret = "MynameisEndtoEndYouyubeChannel1$#"

// router.post(
//   "/createuser",
//   [
//     body('email').isEmail().withMessage('Invalid email address'),
//     body('name').isLength({ min: 3 }).withMessage('Name must be at least 5 characters long'),
//     body('password').isLength({ min: 3 }).withMessage('Password must be at least 5 characters long')
//   ],
//   async (req, res) => {
//     // Validate incoming data
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

// const salt = await bcrypt.genSalt(10);
// let secPassword =await bcrypt.hash(req.body.password,salt)

//     try {
//       // Create user in the database
//       await User.create({
//         name: req.body.name,
//         password: secPassword, // Ensure this matches your schema
//         email: req.body.email,
//         location: req.body.location,
//       });

//       // Send success response
//       res.status(201).json({ success: true });
//     } catch (error) {
//       console.error("Error creating user:", error);

//       // Handle duplicate email error (11000)
//       if (error.code === 11000) {
//         return res.status(400).json({
//           success: false,
//           message: "Email already exists. Please use a different email.",
//         });
//       }

//       // Handle other errors
//       res.status(500).json({
//         success: false,
//         message: "Internal Server Error",
//         error: error.message,
//       });
//     }
//   }
// );






// router.post(                               //vid 08  complete this video 
//   "/loginuser",
//   [
//     body('email').isEmail().withMessage('Invalid email address'),
//     body('password').isLength({min:3}).withMessage('Password must be at least 3 characters long'),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { email, password } = req.body;

//     try {
//       // Check if the user exists
//       const userData = await User.findOne({ email });
//       if (!userData) {
//         return res.status(400).json({ error: "Invalid credentials" });
//       }
//      const pwdCompare = await bcrypt.compare(password,userData.password)
//       // Validate the password (assuming plaintext for now; ideally use bcrypt)
//       if (!pwdCompare) {
//         return res.status(400).json({ error: "Invalid credentials" });
//       }
//      const data ={
//       user:{
//         id: userData.id

//      }}
//      const authtoken =jwt.sign(data,jwtSecret)
//       // Respond with success if credentials match
//       return res.status(200).json({ success: true,authtoken:authtoken, message: "Login successful" });
//     } catch (error) {
//       console.error("Error during login:", error);
//       return res.status(500).json({
//         success: false,
//         message: "Internal Server Error",
//         error: error.message,
//       });
//     }
//   }
// );

// module.exports = router;












