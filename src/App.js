// import "./App.css";
// import Home from "./screens/home";

// import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
// import Login from "./screens/login";
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import Signup from "./screens/Signup.js";
// // import Card from "./components/Card.js";





// function App() {
//   return (
//     <Router>
//     <div>
//       <Routes>
//         <Route exact path="/" element={<Home> </Home>} />

//         <Route exact path="/Login" element={<Login></Login>} />
//         <Route exact path="/createuser" element={<Signup></Signup>} />
//       </Routes>
//     </div>
//   </Router>
    
    
//   );
// }

// export default App;
// ===========================================================vid 11
// 
// =========================================vid11
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './screens/home';
// import Login from './screens/login';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import Signup from './screens/Signup.js';
// import { CartProvider } from './components/ContextReducer.js';

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/Login" element={<Login />} />
//           <Route exact path="/createuser" element={<Signup />} />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;


// ==============================================vid12
import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import MyOrder from './screens/MyOrders.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/ContextReducer';
import React from 'react';
// Other imports...


function App() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/myorder" element={<MyOrder />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
