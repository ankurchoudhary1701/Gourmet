// import React from 'react'

// export default function Card(props) {

// let options = props.options;
// let priceOptions = Object.keys(options);



//     return (
//         <div>    <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
// <img src= {props.imgSrc} className="card-img-top" alt="..." />
//             <div className="card-body">
//                 <h5 className="card-title">{props.foodName}</h5>
//                 {/* <p className="card-text">This is some important text.</p> */}
//                 <div className='container w-100'>
//                     <select className='m-2 h-100  bg-success rounded'>
//                         {Array.from(Array(6), (e, i) => {
//                             return (<option key={i + 1}
//                                 value={i + 1}>{i + 1}</option>);})}
                            
                        
//                     </select>
//                     <select className='m-2 h-100  bg-success rounded'>
//                         <option value="half"></option>
//                         <option value="full"></option>
//                     </select>
//                     {/* <div className='d-inline h-100 fs-5'></div> */}
//                 </div>
//             </div>
//         </div>
//         <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
             
//             <div className="card-body">
//                 {/* <h5 className="card-title">/h5> */}
//                 <p className="card-text"></p>
//                 <div className='container w-100'>
//                     <select className='m-2 h-100  bg-success rounded'>
//                         {Array.from(Array(6), (e, i) => {
//                             return (<option key={i + 1}
//                                 value={i + 1}>{i + 1}</option>);})}
                            
                        
//                     </select>
//                     <select className='m-2 h-100  bg-success rounded'>
//                         {priceOptions.map((data)=>{
//                             return <option key = {data} value ={data}>{data}</option>
//                         })}
//                     </select>
//                     <div className='d-inline h-100 fs-5'></div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     )
// }




// import React from 'react';

// export default function Card(props) {
//   const options = props.options;
//   const priceOptions = Object.keys(options);

//   return (
//     <div>
//       <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
//         <img
//           src={props.imgSrc} // Dynamic image source
//           className="card-img-top"
//           alt={props.foodName || "Food item"} // Alt text fallback
//         />
//         <div className="card-body">
//           <h5 className="card-title">{props.foodName}</h5>
//           <div className="container w-100">
//             {/* Quantity Dropdown */}
//             <select className="m-2 h-100 bg-success rounded">
//               {Array.from({ length: 6 }, (_, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>

//             {/* Price Options Dropdown */}
//             <select className="m-2 h-100 bg-success rounded">
//               {priceOptions.map((data) => (
//                 <option key={data} value={data}>
//                   {data}
//                 </option>
//               ))}
//             </select>

//             {/* Price Display */}
//             <div className="d-inline h-100 fs-5">
//               ₹{options[priceOptions[0]]} {/* Show price for the first price option */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
















// import React from 'react';

// export default function Card(props) {
//   const options = props.options;
//   const priceOptions = Object.keys(options);

//   return (
//     <div>
//       <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
//         <img
//           src={props.imgSrc} // Dynamic image source
//           className="card-img-top"
//           alt={props.foodName || "Food item"} // Alt text fallback
//         />
//         <div className="card-body">
//           <h5 className="card-title">{props.foodName}</h5>
//           <div className="container w-100">
//             {/* Quantity Dropdown */}
//             <select className="m-2 h-100 bg-success rounded">
//               {Array.from({ length: 6 }, (_, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>

//             {/* Price Options Dropdown */}
//             <select className="m-2 h-100 bg-success rounded">
//               {priceOptions.map((data) => (
//                 <option key={data} value={data}>
//                   {data}
//                 </option>
//               ))}
//             </select>

//             {/* Price Display */}
//             <div className="d-inline h-100 fs-5">
//               ₹
//               {typeof options[priceOptions[0]] === 'object'
//                 ? options[priceOptions[0]].regular // Default to 'regular' if object
//                 : options[priceOptions[0]]}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
















// import React from 'react';

// export default function Card(props) {
//   const options = props.options; // This is the 'options' prop passed from the parent (Home.js)
//   const priceOptions = Object.keys(options); // Extract the keys (like 'regular', 'medium', 'large')

//   return (
//     <div>
//       <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
//         {/* Image */}
//         <img
//           src={props.imgSrc} // Use dynamic imgSrc passed from Home.js
//           className="card-img-top"
//           alt={props.foodName || "Food item"} // Alt fallback for image
//         />
//         <div className="card-body">
//           <h5 className="card-title">{props.foodName}</h5>
//           <div className="container w-100">
//             {/* Quantity dropdown */}
//             <select className="m-2 h-100 bg-success rounded">
//               {Array.from({ length: 6 }, (_, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>

//             {/* Price options dropdown */}
//             <select className="m-2 h-100 bg-success rounded">
//               {priceOptions.map((size) => (
//                 <option key={size} value={size}>
//                   {size}
//                 </option>
//               ))}
//             </select>

//             {/* Price display */}
//             <div className="d-inline h-100 fs-5">
//               ₹
//               {/* Check if options[priceOptions[0]] is an object or primitive */}
//               {typeof options[priceOptions[0]] === 'object'
//                 ? options[priceOptions[0]]?.regular || 'Not available'
//                 : options[priceOptions[0]]}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// ================================================
// import React from 'react'; //vid 09 complete

// export default function Card(props) {
//   const options = props.options;
//   const priceOptions = Object.keys(options);

//   return (
//     <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
//       <img src={props.imgSrc} className="card-img-top" alt="Food" />
//       <div className="card-body">
//         <h5 className="card-title">{props.foodName}</h5>
//         <div className='container w-100'>
//           <select className='m-2 h-100 bg-success rounded'>
//             {Array.from(Array(6), (e, i) => (
//               <option key={i + 1} value={i + 1}>{i + 1}</option>
//             ))}
//           </select>
//           <select className='m-2 h-100 bg-success rounded'>
//             {priceOptions.map(option => (
//               <option key={option} value={option}>{option}</option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }


// ================================================================vid 10
// import React from 'react'; 

// export default function Card(props) {
//   const options = props.options;
//   const priceOptions = Object.keys(options);

//   return (
//     <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
//       <img src={props.imgSrc} className="card-img-top" alt="Food" style={{height :"180px",objectFit:"fill"}} />
//       <div className="card-body">
//         <h5 className="card-title">{props.foodName}</h5>
//         <div className='container w-100'>
//           <select className='m-2 h-100 bg-success rounded'>
//             {Array.from(Array(6), (e, i) => (
//               <option key={i + 1} value={i + 1}>{i + 1}</option>
//             ))}
//           </select>
//           <select className='m-2 h-100 bg-success rounded'>
//             {priceOptions.map(option => (
//               <option key={option} value={option}>{option}</option>
//             ))}
//           </select>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// ======================================================vid11

//  =================================================

// ==============================================
// =============================================================
// import React, { useState } from 'react'; // ye code vid 11 ka 1pprox 17 min tak sahi hai
// import { useDispatchCart,useCart } from './ContextReducer';

// export default function Card(props) {
//   const options = props.options;
//   const priceOptions = Object.keys(options);
    
//   const dispatch = useDispatchCart();

//   const handleAddToCart = () => {
//     // Assuming props contain necessary data to add an item to the cart
//     const item = {
//       id: props.foodName, // Use an appropriate unique identifier
//       name: props.foodName,
//       qty: 1, // Default quantity, modify as needed
//       size: priceOptions[0], // Example
//       price: props.options[priceOptions[0]],
//       img: props.imgSrc,
//     };
//     dispatch({ type: 'ADD', ...item });
//     console.log("Item added to cart!");
//   };

//   return (
//     <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
//       <img src={props.foodItem.img} className="card-img-top" alt="Food" style={{ height: "180px", objectFit: "fill" }} />
//       <div className="card-body d-flex flex-column justify-content-between">
//         <div>
//           <h5 className="card-title text-center">{props.foodItem.name}</h5>
//           <div className="container w-100">
//             <select className="m-2 h-100 bg-success rounded">
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>{i + 1}</option>
//               ))}
//             </select>
//             <select className="m-2 h-100 bg-success rounded">
//               {priceOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//             <div className="d-inline h-100 fs-5">Total Price: ₹XYZ</div>
//           </div>
//         </div>
//         <button className="btn btn-success mt-3 w-100" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
// ======================================================== vid 11 complete code 
// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatchCart,useCart } from './ContextReducer';

// export default function Card(props) {
  
//   const options = props.options;
//   const priceOptions = Object.keys(options);
//     const [qty,setQty]=useState(1)  
//     const[size,setSize]=useState("")
   
//   const dispatch = useDispatchCart();
//   let  data = useCart()
// const priceRef = useRef();

//   const handleAddToCart = async() => {
//     let food =[]
//     for(const item of data){
//       if (item.id===props.foodItem._id){food=item;break;}
//     }
//     if(food!=[]){
//       if (food.size===size){ await dispatch({type:"UPDATE",id:foodItem._id,price:finalPrice,qty:qty})}return
//     }
//     await dispatch({ type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price: finalPrice,qty:qty,size:size,})
//     console.log(data)
    
//   };
// let finalPrice =qty*parseInt(options[size]);
// useEffect(()=>{setSize(priceRef.current.value)},[])
//   return (
//     <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
//       <img src={props.foodItem.img} className="card-img-top" alt="Food" style={{ height: "180px", objectFit: "fill" }} />
//       <div className="card-body d-flex flex-column justify-content-between">
//         <div>
//           <h5 className="card-title text-center">{props.foodItem.name}</h5>
//           <div className="container w-100">
//             <select className="m-2 h-100 bg-success rounded"onChange={(e)=>setQty(e.target.value)}>
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>{i + 1}</option>
//               ))}
//             </select>
//             <select className="m-2 h-100 bg-success rounded" ref ={priceRef} onChange={(e)=>setSize(e.target.value)}>
//               {priceOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//             <div className="d-inline h-100 fs-5"> ₹{finalPrice}/-</div>
//           </div>
//         </div>
//         <button className="btn btn-success mt-3 w-100" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
// ======================================================================
// ===========================================================vid11(2)

// ======================================================vid11(complete ok code)
// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatchCart, useCart } from './ContextReducer';

// export default function Card(props) {
//   const options = props.options;
//   const priceOptions = Object.keys(options);

//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("");

//   const dispatch = useDispatchCart();
//   let data = useCart();
//   const priceRef = useRef();

//   let finalPrice = qty * parseInt(options[size]);

//   const handleAddToCart = async () => {
//     console.log("handleAddToCart called"); // Debug log to track duplicate calls
//     console.log("Current Data in Cart:", data); // Log the existing cart state

//     // Find if the item with the same id and size already exists
//     let food = data.find(
//       (item) => item.id === props.foodItem._id && item.size === size
//     );

//     // Prevent execution if no size is selected
//     if (!size) {
//       console.log("Error: No size selected"); // Log if no size is selected
//       return;
//     }

//     if (food) {
//       // Update the quantity and price if the same item with the same size exists
//       console.log("Updating item in cart:", {
//         id: props.foodItem._id,
//         price: finalPrice,
//         qty: qty,
//         size: size,
//       });
//       await dispatch({
//         type: "UPDATE",
//         id: props.foodItem._id,
//         price: finalPrice,
//         qty: qty,
//       });
//     } else {
//       // Add a new item to the cart
//       console.log("Adding new item to cart:", {
//         id: props.foodItem._id,
//         name: props.foodItem.name,
//         price: finalPrice,
//         qty: qty,
//         size: size,
//       });
//       await dispatch({
//         type: "ADD",
//         id: props.foodItem._id,
//         name: props.foodItem.name,
//         price: finalPrice,
//         qty: qty,
//         size: size,
//       });
//     }

//     console.log("Updated Cart Data:", data); // Log the cart state after the addition or update
//   };

//   useEffect(() => {
//     setSize(priceRef.current.value);
//   }, []);

//   return (
//     <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
//       <img
//         src={props.foodItem.img}
//         className="card-img-top"
//         alt="Food"
//         style={{ height: "180px", objectFit: "fill" }}
//       />
//       <div className="card-body d-flex flex-column justify-content-between">
//         <div>
//           <h5 className="card-title text-center">{props.foodItem.name}</h5>
//           <div className="container w-100">
//             <select
//               className="m-2 h-100 bg-success rounded"
//               onChange={(e) => setQty(e.target.value)}
//             >
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//             <select
//               className="m-2 h-100 bg-success rounded"
//               ref={priceRef}
//               onChange={(e) => setSize(e.target.value)}
//             >
//               {priceOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//             <div className="d-inline h-100 fs-5"> ₹{finalPrice}/-</div>
//           </div>
//         </div>
//         <button
//           className="btn btn-success mt-3 w-100"
//           onClick={handleAddToCart}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }


// =====================================================
// import React, { useEffect, useRef, useState } from 'react';

// export default function Card(props) {
//   // Declare hooks at the top level
//   const options = props.options || {}; // Fallback to empty object
//   const priceOptions = Object.keys(options);
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("");
//   const priceRef = useRef();

//   // Fallback to 0 if no size is selected
//   let finalPrice = qty * parseInt(options[size] || 0);

//   // Default size setup
//   useEffect(() => {
//     if (priceOptions.length > 0) {
//       setSize(priceOptions[0]); // Default size
//     }
//   }, [priceOptions]);

//   // Handle missing foodItem after hooks
//   if (!props.foodItem) {
//     return <div>Error: No food item provided</div>;
//   }

//   // Return JSX
//   return (
//     <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
//       <img
//         src={props.foodItem.img || "default-image-url.jpg"} // Fallback image
//         className="card-img-top"
//         alt={props.foodItem.name || "Food"}
//         style={{ height: "180px", objectFit: "fill" }}
//       />
//       <div className="card-body d-flex flex-column justify-content-between">
//         <h5 className="card-title text-center">{props.foodItem.name || "Food Name"}</h5>
//         <div className="container w-100">
//           <select
//             className="m-2 h-100 bg-success rounded"
//             onChange={(e) => setQty(e.target.value)}
//           >
//             {Array.from(Array(6), (e, i) => (
//               <option key={i + 1} value={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>
//           <select
//             className="m-2 h-100 bg-success rounded"
//             ref={priceRef}
//             onChange={(e) => setSize(e.target.value)}
//           >
//             {priceOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//           <div className="d-inline h-100 fs-5"> ₹{finalPrice}/-</div>
//         </div>
//       </div>
//     </div>
//   );
// }


// ============================================================
// import React, { useEffect, useRef, useState } from "react";
// import { useDispatchCart, useCart } from "./ContextReducer"; // Assuming context is set up

// export default function Card(props) {
//   // Declare hooks at the top level
//   const options = props.options || {}; // Fallback to empty object
//   const priceOptions = Object.keys(options);
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("");
//   const priceRef = useRef();

//   const dispatch = useDispatchCart(); // Dispatch function for cart actions
//   const data = useCart(); // Current state of the cart

//   // Fallback to 0 if no size is selected
//   let finalPrice = qty * parseInt(options[size] || 0);

//   // Default size setup
//   useEffect(() => {
//     if (priceOptions.length > 0) {
//       setSize(priceOptions[0]); // Default size
//     }
//   }, [priceOptions]);

//   // Handle missing foodItem after hooks
//   if (!props.foodItem) {
//     return <div>Error: No food item provided</div>;
//   }

//   const handleAddToCart = () => {
//     if (!size) {
//       alert("Please select a size before adding to cart.");
//       return;
//     }

//     // Check if the item already exists in the cart
//     const existingItem = data.find(
//       (item) => item.id === props.foodItem._id && item.size === size
//     );

//     if (existingItem) {
//       // Update the quantity and price of the existing item
//       dispatch({
//         type: "UPDATE",
//         id: props.foodItem._id,
//         qty: existingItem.qty + qty,
//         price: finalPrice,
//       });
//     } else {
//       // Add the new item to the cart
//       dispatch({
//         type: "ADD",
//         id: props.foodItem._id,
//         name: props.foodItem.name,
//         price: finalPrice,
//         qty: qty,
//         size: size,
//       });
//     }

//     alert(`${props.foodItem.name} added to cart!`);
//   };

//   // Return JSX
//   return (
//     <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
//       <img
//         src={props.foodItem.img || "default-image-url.jpg"} // Fallback image
//         className="card-img-top"
//         alt={props.foodItem.name || "Food"}
//         style={{ height: "180px", objectFit: "fill" }}
//       />
//       <div className="card-body d-flex flex-column justify-content-between">
//         <h5 className="card-title text-center">{props.foodItem.name || "Food Name"}</h5>
//         <div className="container w-100">
//           <select
//             className="m-2 h-100 bg-success rounded"
//             onChange={(e) => setQty(parseInt(e.target.value))}
//           >
//             {Array.from(Array(6), (e, i) => (
//               <option key={i + 1} value={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>
//           <select
//             className="m-2 h-100 bg-success rounded"
//             ref={priceRef}
//             onChange={(e) => setSize(e.target.value)}
//           >
//             {priceOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//           <div className="d-inline h-100 fs-5"> ₹{finalPrice}/-</div>
//         </div>
//         <button
//           className="btn btn-success mt-3 w-100"
//           onClick={handleAddToCart}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
// ===========================================


// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatchCart, useCart } from './ContextReducer';

// export default function Card(props) {
//   let data = useCart();
//   let navigate = useNavigate();
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("");
//   const priceRef = useRef();
//   const dispatch = useDispatchCart();

//   const handleClick = () => {
//     if (!localStorage.getItem("token")) {
//       navigate("/login");
//     }
//   };

//   const handleQty = (e) => {
//     setQty(e.target.value);
//   };

//   const handleOptions = (e) => {
//     setSize(e.target.value);
//   };

//   const handleAddToCart = async () => {
//     let food = data.find(item => item.id === props.item._id);

//     if (food) {
//       if (food.size === size) {
//         await dispatch({ type: "UPDATE", id: props.item._id, price: finalPrice, qty: qty });
//       } else if (food.size !== size) {
//         await dispatch({ type: "ADD", id: props.item._id, name: props.item.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc });
//       }
//       return;
//     }

//     await dispatch({ type: "ADD", id: props.item._id, name: props.item.name, price: finalPrice, qty: qty, size: size });
//   };

//   useEffect(() => {
//     setSize(priceRef.current.value);
//   }, []);

//   let finalPrice = qty * parseInt(props.options[size]);

//   return (
//     <div>
//       <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//         <img src={props.ImgSrc} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//         <div className="card-body">
//           <h5 className="card-title">{props.foodName}</h5>
//           <div className='container w-100 p-0' style={{ height: "38px" }}>
//             <select className="m-2 h-100 w-20 bg-success text-black rounded" onClick={handleClick} onChange={handleQty}>
//               {Array.from(Array(6), (e, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
//             </select>
//             <select className="m-2 h-100 w-20 bg-success text-black rounded" ref={priceRef} onClick={handleClick} onChange={handleOptions}>
//               {Object.keys(props.options).map((option) => <option key={option} value={option}>{option}</option>)}
//             </select>
//             <div className='d-inline ms-2 h-100 w-20 fs-5'>₹{finalPrice}/-</div>
//           </div>
//           <hr />
//           <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// }







import React, { useState, useEffect, useRef } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
  let data = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const priceRef = useRef();
  const dispatch = useDispatchCart();

  const handleQty = (e) => setQty(e.target.value);
  const handleOptions = (e) => setSize(e.target.value);

  const handleAddToCart = async () => {
    const food = data.find(item => item.id === props.item._id);
    const finalPrice = qty * parseInt(props.options[size]);

    if (food) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.item._id, price: finalPrice, qty: qty });
      } else {
        await dispatch({
          type: "ADD",
          id: props.item._id,
          name: props.item.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: props.ImgSrc, // Add image URL
        });
      }
    } else {
      await dispatch({
        type: "ADD",
        id: props.item._id,
        name: props.item.name,
        price: finalPrice,
        qty: qty,
        size: size,
        img: props.ImgSrc, // Add image URL
      });
    }
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  const finalPrice = qty * parseInt(props.options[size]);

  return (
    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
      <img src={props.ImgSrc} className="card-img-top" alt={props.foodName} style={{ height: "120px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">{props.foodName}</h5>
        <div className="container w-100 p-0" style={{ height: "38px" }}>
          <select className="m-2 h-100 w-20 bg-success text-black rounded" onChange={handleQty}>
            {[...Array(6)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select className="m-2 h-100 w-20 bg-success text-black rounded" ref={priceRef} onChange={handleOptions}>
            {Object.keys(props.options).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <div className="d-inline ms-2 h-100 w-20 fs-5">₹{finalPrice}/-</div>
        </div>
        <hr />
        <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
