// const mongoose = require('mongoose');
// const mongoURI ="mongodb+srv:ankur94choudhary:aviral.m7@cluster2.qo77n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2"
// const mongoDB =async()=>{

//     await mongoose.connect(mongoURI,{useNewUrlParser: true},()=>{
//         console.log("connected");
//     });
    
// }

// module.exports = mongoDB;


// =================================



// =================================

// const mongoose = require('mongoose'); //vid 08 complete code ok

// const mongoURI = "mongodb+srv://ankur94choudhary:aviral.m7@cluster2.qo77n.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//     try {
//         // Connect to MongoDB without deprecated options
//         await mongoose.connect(mongoURI);
//         console.log("Connecteddd to MongoDB");

//         // Fetch data from the collection
//         const foodItems = mongoose.connection.db.collection("fooditems");
//         const data = await foodItems.find({}).toArray(); // Fetch all documents
//         console.log("Fetched data:",data);

//         return data; // Return fetched data if needed
//     } catch (error) {
//         console.error("Error connecting to MongoDB or fetching data:", error.message);
//         throw error; // Rethrow the error to prevent further execution
//     }
// };

// module.exports = mongoDB;
// ========================================



// const mongoose = require('mongoose'); //vid 08 complete code ok

// const mongoURI = "mongodb+srv://ankur94choudhary:aviral.m7@cluster2.qo77n.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongoDB = async () => {
    
//         // Connect to MongoDB without deprecated options
//         await mongoose.connect(mongoURI, { useNewUrlParser : true},async(err,result)=>{
//           if (err) console.log("----",err)
//             else {
//         console.log("connectedd");
//         const fetched_data =await mangoose.connection.db.collection("fooditems");
//         fetched_data.find({}).toArray(function(err,data){
//             if(err) console.log(err);
//             else{ global.fooditems=data;}
//         })
//             } 

//         })
//         console.log("Connecteddd to MongoDB");

//         // Fetch data from the collection
//         const foodItems = mongoose.connection.db.collection("fooditems");
//         const data = await foodItems.find({}).toArray(); // Fetch all documents
//         console.log("Fetched data:",data);

//         return data; // Return fetched data if needed
// //     } catch (error) {
// //         console.error("Error connecting to MongoDB or fetching data:", error.message);
// //         throw error; // Rethrow the error to prevent further execution
//     };
// // ;

// module.exports = mongoDB;


// =================================================================================
// 
// ==========================================================
    



// =============================================
// const mongoose = require('mongoose'); /////vid 09 (complete)

// const mongoURI = "mongodb+srv://ankur94choudhary:aviral.m7@cluster2.qo77n.mongodb.net/gofoodmern?retryWrites=true&w=majority";
// // const mongoURI = "mongodb+srv://ankur94choudhary:aviral.m7@cluster2.qo77n.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster2";
// const mongoDB = async () => {
//     try {
//         // Connect to MongoDB using async/await
//         await mongoose.connect(mongoURI);
//         console.log("Connected to MongoDB");

//         // Access collections
//         const foodItemsCollection = mongoose.connection.db.collection("fooditems");
//         const foodCatogaryCollection = mongoose.connection.db.collection("foodcatagory");

//         // Fetch data using async/await
//         const foodItems = await foodItemsCollection.find({}).toArray();
//         const foodCatogary = await foodCatogaryCollection.find({}).toArray();

//         // Store data globally
//         global.fooditems = foodItems;
//         global.foodCatogary = foodCatogary;

//         console.log("Fetched food items:", foodItems);
//         console.log("Fetched food categories:", foodCatogary);
//     } catch (err) {
//         console.error("Error connecting to MongoDB or fetching data:", err.message);
//         throw err; // Rethrow the error to prevent further execution
//     }
// };

// module.exports = mongoDB;
// ================================================vide12

// const mongoose = require('mongoose');

// const mongoURI = "mongodb+srv://ankur94choudhary:aviral.m7@cluster2.qo77n.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// module.exports = async function fetchData(callback) {
//     try {
//         // Connect to MongoDB
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to MongoDB successfully!");

//         // Fetch food items from the 'food_items' collection
//         const foodCollection = mongoose.connection.db.collection("food_items");
//         const foodItems = await foodCollection.find({}).toArray();

//         // Fetch categories from the 'Categories' collection
//         const categoryCollection = mongoose.connection.db.collection("Categories");
//         const categories = await categoryCollection.find({}).toArray();

//         // Pass data to callback
//         callback(null, foodItems, categories);
//     } catch (error) {
//         console.error("Error connecting to MongoDB or fetching data:", error.message);
//         callback(error, null, null);
//     }
// };





const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://ankur94choudhary:aviral.m7@cluster2.qo77n.mongodb.net/gofoodmern?retryWrites=true&w=majority";

async function connectDB() {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB" );

        const foodCollection = mongoose.connection.db.collection("fooditems");
        const foodData = await foodCollection.find({}).toArray();

        const categoryCollection = mongoose.connection.db.collection("foodcatagory");
        const foodCategory = await categoryCollection.find({}).toArray();
        console.log("Food Data:", foodData);
        console.log("Food Categories:", foodCategory);
       
        return { foodData, foodCategory };
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

module.exports = connectDB;
