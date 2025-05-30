
// const express = require('express') ////post through thunderclient vid 06

// const app = express()
// const port = 6000
// const mongoDB = require("./db")
// mongoDB()

// app.get('/', (req, res) => {
//   res.send('Hello World!!!!')
// })
// app.use(express.json())
// app.use('/api',require('./Routes/CreateUser'));
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// ===============================

// =========================================================
// const express = require('express');                       //vid 07
// const mongoDB = require('./db'); // Your database connection file

// const app = express();
// const port = 6000;

// // Connect to MongoDB
// mongoDB();

// // Middleware
// app.use(express.json()); // Parse incoming JSON requests

// // Define routes
// app.use('/api', require('./Routes/CreateUser')); // Ensure this path is correct

// // Default route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// =================================================




// ===========================================
// 

// const express = require('express'); //vid 8(complete to upload data for  localhost 3000 to mongodb atlas localhost5000)
// const mongoDB = require('./db'); // Ensure './db' sets up your MongoDB connection
// const cors = require('cors'); // Middleware for handling CORS

// const app = express();
// const port = 5000; // Changed to a safer port (not 6000)

// // Connect to MongoDB
// mongoDB();

// // Middleware
// app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from the React app
// app.use(express.json()); // Parse incoming JSON requests

// // Default route for testing
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Routes
// app.use('/api', require('./Routes/CreateUser')); // Ensure the path is correct

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });


// =====================================================
// const express = require('express'); //vid 9()
// const mongoDB = require('./db'); // Ensure './db' sets up your MongoDB connection
// const cors = require('cors'); // Middleware for handling CORS

// const app = express();
// const port = 5000; // Changed to a safer port (not 6000)

// // Connect to MongoDB
// mongoDB();

// // Middleware
// app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from the React app
// app.use(express.json()); // Parse incoming JSON requests

// // Default route for testing
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Routes
// app.use('/api', require( "./Routes/CreateUser")); // Ensure the path is correct
// app.use('/api', require( "./Routes/DisplayData"));
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });



// ======================================
// const express = require('express');
// const mongoDB = require('./db'); // Sets up MongoDB connection
// const cors = require('cors'); // Middleware for handling CORS

// const app = express();
// const port = 5000; // Backend server port

// // Connect to MongoDB
// mongoDB();

// // Middleware
// app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from the React app
// app.use(express.json()); // Parse incoming JSON requests

// // Default route for testing
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Routes
// app.use('/api', require('./Routes/CreateUser')); // Handle user-related routes
// app.use('/api', require('./Routes/DisplayData')); // Handle data-related routes

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// =====================================
// const express = require('express');  //vid 09  complete
// const mongoDB = require('./db'); // Sets up MongoDB connection
// const cors = require('cors'); // Middleware for handling CORS
// require('dotenv').config(); // Load environment variables from .env file

// const app = express();
// const port = process.env.PORT || 5000; // Use environment variable or default to 5000

// // Connect to MongoDB
// mongoDB(); // Ensure this handles connection errors properly

// // Middleware
// app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' })); // Allow requests from the frontend
// app.use(express.json()); // Parse incoming JSON requests

// // Default route for testing
// app.get('/', (req, res) => {
//   res.send('Backend server is running!');
// });

// // Routes
// app.use('/api', require('./Routes/CreateUser')); // Handle user-related routes
// app.use('/api', require('./Routes/DisplayData')); // Handle data-related routes

// // Handle 404 - Not Found
// app.use((req, res, next) => {
//   res.status(404).json({ error: 'Route not found' });
// });

// // Global Error Handler
// app.use((err, req, res, next) => {
//   console.error(err.stack); // Log error details
//   res.status(500).json({ error: 'Internal Server Error' });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
// =====================================================================vid12
// global.foodData = require('./db')(function call(err, data, CatData) {
//     // console.log(data)
//     if(err) console.log(err);
//     global.foodData = data;
//     global.foodCategory = CatData;
//   })
  
//   const express = require('express')
//   const app = express()
//   const port = 5000
//   app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });
//   app.use(express.json())
  
//   app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  
//   app.use('/api/auth', require('./Routes/Auth'));
  
//   app.listen(port, () => {
//     console.log(`Example app listening on http://localhost:${port}`)
//   })


// ================================================
// const express = require('express');
// const connectDB = require('./db');
// const app = express();
// const port = 5000;

// global.foodData = null;
// global.foodCategory = null;

// (async () => {
//     try {
//         const { foodData, foodCategory } = await connectDB();
//         global.foodData = foodData;
//         global.foodCategory = foodCategory;
//     } catch (error) {
//         console.error("Failed to initialize MongoDB data:", error);
//     }
// })();

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// app.use(express.json());
// app.use('/api/auth', require('./Routes/Auth'));

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });



// const express = require('express');
// const connectDB = require('./db');
// const app = express();
// const port = 5000;

// // Global variables to store food data and categories
// global.foodData = null;
// global.foodCategory = null;

// // Connect to MongoDB and initialize global data
// (async () => {
//     try {
//         const { foodData, foodCategory } = await connectDB();
//         global.foodData = foodData;
//         global.foodCategory = foodCategory;
//         console.log("Global data initialized");
//     } catch (error) {
//         console.error("Failed to initialize MongoDB data:", error);
//     }
// })();

// // Middleware for handling CORS
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// // Middleware for parsing JSON data
// app.use(express.json());

// // API route for authentication (example route for demonstration)
// app.use('/api/auth', require('./Routes/Auth'));

// // API route to fetch food data
// app.get('/api/foodData', (req, res) => {
//     if (global.foodData && global.foodCategory) {
//         res.status(200).json({
//             success: true,
//             foodData: global.foodData,
//             foodCategory: global.foodCategory,
//         });
//     } else {
//         res.status(500).json({ 
//             success: false, 
//             message: "Food data not initialized" 
//         });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
// ==========================================================
const express = require('express');
const connectDB = require('./db');
const app = express();
const port = 5000;

// Global variables to store food data and categories
global.foodData = null;
global.foodCategory = null;

// Initialize MongoDB data
(async () => {
    try {
        const { foodData, foodCategory } = await connectDB();
        global.foodData = foodData;
        global.foodCategory = foodCategory;
    } catch (error) {
        console.error("Failed to initialize MongoDB data:", error);
    }
})();

// Middleware for handling CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Allow requests from your frontend
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Middleware for parsing JSON data
app.use(express.json());

// API route for authentication
app.use('/api/auth', require('./Routes/Auth'));

// API route to fetch food data
app.get('/api/foodData', (req, res) => {
    if (global.foodData && global.foodCategory) {
        res.status(200).json({
            success: true,
            foodData: global.foodData,
            foodCategory: global.foodCategory,
        });
    } else {
        res.status(500).json({ 
            success: false, 
            message: "Food data not initialized" 
        });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});







// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const connectDB = require('./db');  // Assuming you have a separate db.js file for DB connection
// const app = express();
// const port = 5000;

// // Global variables to store food data and categories
// global.foodData = null;
// global.foodCategory = null;

// // Initialize MongoDB data for food items and categories
// (async () => {
//     try {
//         const { foodData, foodCategory } = await connectDB();
//         global.foodData = foodData;
//         global.foodCategory = foodCategory;
//     } catch (error) {
//         console.error("Failed to initialize MongoDB data:", error);
//     }
// })();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/yourDB', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.log('MongoDB connection error: ', err));

// // Order schema
// const orderSchema = new mongoose.Schema({
//     email: { type: String, required: true },
//     order_data: { type: Array, required: true },
//     order_date: { type: String, required: true },
// });

// const Order = mongoose.model('Order', orderSchema);

// // Route to save order
// app.post('/api/auth/orderData', async (req, res) => {
//     const { order_data, email, order_date } = req.body;

//     try {
//         const newOrder = new Order({ order_data, email, order_date });
//         await newOrder.save();
//         res.status(200).json({ message: 'Order saved successfully' });
//     } catch (error) {
//         console.error('Error saving order:', error);
//         res.status(500).json({ message: 'Failed to save order' });
//     }
// });

// // Route to fetch order data
// app.post('/api/auth/myOrderData', async (req, res) => {
//     const { email } = req.body;

//     try {
//         const orders = await Order.find({ email });
//         res.status(200).json(orders);
//     } catch (error) {
//         console.error('Error fetching orders:', error);
//         res.status(500).json({ message: 'Failed to fetch orders' });
//     }
// });

// // API route to fetch food data
// app.get('/api/foodData', (req, res) => {
//     if (global.foodData && global.foodCategory) {
//         res.status(200).json({
//             success: true,
//             foodData: global.foodData,
//             foodCategory: global.foodCategory,
//         });
//     } else {
//         res.status(500).json({
//             success: false,
//             message: "Food data not initialized",
//         });
//     }
// });

// // API route for authentication (routes for user login/signup etc. should be implemented here)
// app.use('/api/auth', require('./Routes/Auth'));

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
