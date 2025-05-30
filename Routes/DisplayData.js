// const express = require('express');   //vid 08 complete this video
// const router = express.Router();

// router.post('/foodData',(req,res)=>

// {
//     try {
//         console.log(global.foodCatagory)
//         res.send([global.fooditems,global.foodCatogory])
//     } catch (error) {
//         console.error(error.message);
//         res.send("Server Error")
        
//     }
// })


// module.exports = router;





// =========================================
// const express = require('express'); //(vid 09 get foodData in thundercleint)
// const router = express.Router();

// router.get('/foodData', (req, res) => {
//     try {
//         res.json([global.fooditems, global.foodCatogary]);
//     } catch (error) {
//         console.error("Error fetching food data:", error.message);
//         res.status(500).send("Server error");
//     }
// });

// module.exports = router;
// =============================================
// const express = require('express');
// const router = express.Router();

// // Use POST if the frontend expects it
// router.post('/foodData', (req, res) => {
//     try {
//         if (!global.fooditems || !global.foodCatogary) {
//             return res.status(500).send("Data not available on the server.");
//         }
//         res.json([global.fooditems, global.foodCatogary]);
//     } catch (error) {
//         console.error("Error fetching food data:", error.message);
//         res.status(500).send("Server error");
//     }
// });

// module.exports = router;








// ===========================================
// const express = require('express'); // vid 09 complete
// const router = express.Router();

// router.post('/foodData', (req, res) => {
//   try {
//     if (!global.fooditems || !global.foodCatogary) {
//       return res.status(500).send("Data not available on the server.");
//     }
//     res.json([global.fooditems, global.foodCatogary]);
//   } catch (error) {
//     console.error("Error fetching food data:", error.message);
//     res.status(500).send("Server error");
//   }
// });

// module.exports = router;
