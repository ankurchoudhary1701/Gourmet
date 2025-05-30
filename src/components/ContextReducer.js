// import React, {   createContext, useContext, useReducer } from 'react'
// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// const reducer = (state,action)=>{
// switch(action.type){
//     case "ADD": return[...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
//     default: console.log("error in Reducer");
// }
// }

// export const CartProvider = ({Children})=>{
//     const[state,dispatch]= useReducer(reducer,[])
//     return(
// <CartDispatchContext.Provider value  ={dispatch}>
//   <CartDispatchContext.Provider value={ state}>
//     {Children}
//   </CartDispatchContext.Provider>
// </CartDispatchContext.Provider>
//     )
// }
// export const useCart =()=>useContext(CartStateContext);
// export const useDispatchCart =()=> useContext(CartDispatchContext);


// // ========================================================vid 11 
// import React, { createContext, useContext, useReducer } from 'react';

// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }];
//     default:
//       console.log("error in Reducer");
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, []);
//   return (
//     <CartStateContext.Provider value={state}>
//       <CartDispatchContext.Provider value={dispatch}>
//         {children}
//       </CartDispatchContext.Provider>
//     </CartStateContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartStateContext);
// export const useDispatchCart = () => useContext(CartDispatchContext);
// ===============================================================vid11(2)

// ===========================================vid11(ok code)
// import React, { createContext, useContext, useReducer } from 'react';

// // Create contexts for Cart State and Dispatch
// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// // Reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }];
//     case "UPDATE":
//       return state.map((item) =>
//         item.id === action.id && item.size === action.size
//           ? { ...item, qty: action.qty, price: action.price }
//           : item
//       );
//     default:
//       console.log("Error in Reducer");
//       return state;
//   }
// };

// // CartProvider to wrap components
// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, []);
//   return (
//     <CartStateContext.Provider value={state}>
//       <CartDispatchContext.Provider value={dispatch}>
//         {children}
//       </CartDispatchContext.Provider>
//     </CartStateContext.Provider>
//   );
// };

// // Custom hooks to access Cart State and Dispatch
// export const useCart = () => useContext(CartStateContext);
// export const useDispatchCart = () => useContext(CartDispatchContext);

// ======================================vid 12
// import React, { createContext, useReducer, useContext } from 'react';//14min ok

// // Reducer function to manage cart actions
// export const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       return [...state, { ...action }];
//     case "UPDATE":
//       return state.map((item) =>
//         item.id === action.id && item.size === action.size
//           ? { ...item, qty: item.qty + action.qty, price: item.price + action.price }
//           : item
//       );
//     case "REMOVE":
//       return state.filter((item) => item.id !== action.id || item.size !== action.size);
//     default:
//       return state;
//   }
// };

// // Create contexts for cart state and dispatch
// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, []);
//   return (
//     <CartStateContext.Provider value={state}>
//       <CartDispatchContext.Provider value={dispatch}>
//         {children}
//       </CartDispatchContext.Provider>
//     </CartStateContext.Provider>
//   );
// };

// // Custom hooks to access the context
// export const useCart = () => useContext(CartStateContext);
// export const useDispatchCart = () => useContext(CartDispatchContext);

// ========================================================================
// import React, { useReducer, useContext, createContext } from 'react';

// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }];
//     case "REMOVE":
//       let newArr = [...state];
//       newArr.splice(action.index, 1);
//       return newArr;
//     case "DROP":
//       return [];
//     case "UPDATE":
//       let arr = [...state];
//       arr.find((food, index) => {
//         if (food.id === action.id) {
//           arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price };
//         }
//         return arr;
//       });
//       return arr;
//     default:
//       console.log("Error in Reducer");
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, []);

//   return (
//     <CartDispatchContext.Provider value={dispatch}>
//       <CartStateContext.Provider value={state}>
//         {children}
//       </CartStateContext.Provider>
//     </CartDispatchContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartStateContext);
// export const useDispatchCart = () => useContext(CartDispatchContext);




// ContextReducer.js
import React, { useReducer, useContext, createContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }];
    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    case "DROP":
      return [];
    case "UPDATE":
      let arr = [...state];
      arr.find((food, index) => {
        if (food.id === action.id) {
          arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price };
        }
        return arr;
      });
      return arr;
    default:
      console.log("Error in Reducer");
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
