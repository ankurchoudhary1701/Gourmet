// import React, { useState } from 'react'
// import {  Link } from 'react-router-dom'
// // import { use } from '../backend/Routes/CreateUser';

// export default function Signup() {
//   const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:6000/api/createuser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json', // Correctly formatted header
//     },
 
//       body: JSON.stringify({name : credentials.name,email :credentials.email,password:credentials.password,location:credentials.geolocation})
//     })
//     const json = await response.json()
//     console.log(json);
//     if (!json.success) {
//       alert("enter valid credentials")
//     }}
  
//   const onChange = (event) => {
//     setcredentials({ ...credentials, [event.target.name]: event.target.value })
//   }
//   return (
//     <>
//       <div className='container'>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} /></div>

//           <div class="mb-3">
//             <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
//             <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>


//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
//             <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputPassword1" /></div>

//           <button type="submit" className="m-3 btn btn-success">Submit</button>
//           <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
//         </form>
//       </div>
//     </>
//   )
// }




// ===========================================================================


// import React, { useState } from 'react';  ///vid 7(1st)
// import { Link } from 'react-router-dom';

// export default function Signup() {
//   const [credentials, setCredentials] = useState({
//     name: "",
//     email: "",
//     password: "",
//     geolocation: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:6000/api/createuser", { // Correct port
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: credentials.name,
//           email: credentials.email,
//           password: credentials.password,
//           location: credentials.geolocation,
//         }),
//       });
      

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const json = await response.json();
//       console.log(json);

//       if (json.success) {
//         alert("Signup successful!");
//       } else {
//         alert("Signup failed: " + json.error);
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   const onChange = (event) => {
//     setCredentials({
//       ...credentials,
//       [event.target.name]: event.target.value,
//     });
//   };

//   return (
//     <>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={credentials.name}
//               onChange={onChange}
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               value={credentials.email}
//               onChange={onChange}
//               id="email"
//               aria-describedby="emailHelp"
//             />
//             <div id="emailHelp" className="form-text">
//               We'll never share your email with anyone else.
//             </div>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               value={credentials.password}
//               onChange={onChange}
//               id="password"
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="geolocation" className="form-label">Location</label>
//             <input
//               type="text"
//               className="form-control"
//               name="geolocation"
//               value={credentials.geolocation}
//               onChange={onChange}
//               id="geolocation"
//             />
//           </div>

//           <button type="submit" className="m-3 btn btn-success">
//             Submit
//           </button>
//           <Link to="/login" className="m-3 btn btn-danger">
//             Already a user
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// }
// =======================================================



// import React, { useState } from 'react';   //vid7(2nd  connecting frontend data to upload on mongodb, and all vid correct code)
// import { Link } from 'react-router-dom';

// export default function Signup() {
//   const [credentials, setCredentials] = useState({
//     name: '',
//     email: '',
//     password: '',
//     geolocation: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/createuser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: credentials.name,
//           email: credentials.email,
//           password: credentials.password,
//           location: credentials.geolocation,
//         }),
//       });

//       const json = await response.json(); // Parse the response
//       console.log(json);

//       if (json.success) {
//         alert('Signup successful!');
//       } else {
//         alert('Signup failed: ' + json.error);
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//       alert('An error occurred during signup. Please try again later.');
//     }
//   };

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             value={credentials.name}
//             onChange={onChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             name="email"
//             value={credentials.email}
//             onChange={onChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             name="password"
//             value={credentials.password}
//             onChange={onChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="geolocation" className="form-label">
//             Location
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             name="geolocation"
//             value={credentials.geolocation}
//             onChange={onChange}
//           />
//         </div>

//         <button type="submit" className="m-3 btn btn-success">
//           Submit
//         </button>
//         <Link to="/login" className="m-3 btn btn-danger">
//           Already a user
//         </Link>
//       </form>
//     </div>
//   );
// }
// ========================================vid12
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// export default function Signup() {
//     const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
//     const [address, setAddress] = useState("");
//     let navigate = useNavigate();

//     const handleClick = async (e) => {
//         e.preventDefault();
//         try {
//             const navLocation = () => new Promise((res, rej) => {
//                 navigator.geolocation.getCurrentPosition(res, rej);
//             });

//             const latlong = await navLocation();
//             const { latitude, longitude } = latlong.coords;

//             const response = await fetch("http://localhost:5000/api/auth/getlocation", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ latlong: { lat: latitude, long: longitude } }),
//             });

//             const { location } = await response.json();
//             console.log(location);
//             setAddress(location);
//             setCredentials({ ...credentials, geolocation: location });
//         } catch (error) {
//             console.error("Error fetching location:", error);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch("http://localhost:5000/api/auth/createuser", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name: credentials.name,
//                     email: credentials.email,
//                     password: credentials.password,
//                     location: credentials.geolocation,
//                 }),
//             });

//             const json = await response.json();
//             console.log(json);

//             if (json.success) {
//                 localStorage.setItem('token', json.authToken);
//                 navigate("/login");
//             } else {
//                 alert("Enter valid credentials");
//             }
//         } catch (error) {
//             console.error("Error during signup:", error);
//         }
//     };

//     const onChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };

//     return (
//         <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', height: '100vh' }}>
//             <Navbar />
//             <div className="container">
//                 <form className="w-50 m-auto mt-5 border bg-dark border-success rounded" onSubmit={handleSubmit}>
//                     <div className="m-3">
//                         <label htmlFor="name" className="form-label">Name</label>
//                         <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} />
//                     </div>
//                     <div className="m-3">
//                         <label htmlFor="email" className="form-label">Email address</label>
//                         <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} />
//                     </div>
//                     <div className="m-3">
//                         <label htmlFor="address" className="form-label">Address</label>
//                         <fieldset>
//                             <input type="text" className="form-control" name="address" placeholder="Click below for fetching address" value={address} onChange={(e) => setAddress(e.target.value)} />
//                         </fieldset>
//                     </div>
//                     <div className="m-3">
//                         <button type="button" onClick={handleClick} className="btn btn-success">Click for current Location</button>
//                     </div>
//                     <div className="m-3">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} />
//                     </div>
//                     <button type="submit" className="m-3 btn btn-success">Submit</button>
//                     <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
//                 </form>
//             </div>
//         </div>
//     );
// }



// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// export default function Signup() {
//     const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
//     const [address, setAddress] = useState("");
//     let navigate = useNavigate();

//     // Function to fetch the geolocation (latitude and longitude) and get the address
//     const handleClick = async (e) => {
//         e.preventDefault();
//         try {
//             // Get the user's geolocation (latitude and longitude)
//             const navLocation = () => new Promise((res, rej) => {
//                 navigator.geolocation.getCurrentPosition(res, rej);
//             });

//             const latlong = await navLocation();
//             const { latitude, longitude } = latlong.coords;

//             // Send the latitude and longitude to the backend to fetch the address
//             const response = await fetch("http://localhost:5000/api/auth/getlocation", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ lat: latitude, long: longitude }), // Send lat and long directly
//             });

//             const { location } = await response.json();
//             console.log(location);
//             setAddress(location);  // Set the fetched address
//             setCredentials({ ...credentials, geolocation: location }); // Store it in the credentials
//         } catch (error) {
//             console.error("Error fetching location:", error);
//         }
//     };

//     // Function to handle form submission and send data to the backend
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch("http://localhost:5000/api/auth/createuser", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name: credentials.name,
//                     email: credentials.email,
//                     password: credentials.password,
//                     location: credentials.geolocation,  // Send geolocation here
//                 }),
//             });

//             const json = await response.json();
//             console.log(json);

//             if (json.success) {
//                 localStorage.setItem('token', json.authToken);
//                 navigate("/login");
//             } else {
//                 alert("Enter valid credentials");
//             }
//         } catch (error) {
//             console.error("Error during signup:", error);
//         }
//     };

//     // Function to handle input changes and update the state
//     const onChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };

//     return (
//         <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', height: '100vh' }}>
//             <Navbar />
//             <div className="container">
//                 <form className="w-50 m-auto mt-5 border bg-dark border-success rounded" onSubmit={handleSubmit}>
//                     <div className="m-3">
//                         <label htmlFor="name" className="form-label">Name</label>
//                         <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} />
//                     </div>
//                     <div className="m-3">
//                         <label htmlFor="email" className="form-label">Email address</label>
//                         <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} />
//                     </div>
//                     <div className="m-3">
//                         <label htmlFor="address" className="form-label">Address</label>
//                         <fieldset>
//                             <input type="text" className="form-control" name="address" placeholder="Click below for fetching address" value={address} onChange={(e) => setAddress(e.target.value)} disabled />
//                         </fieldset>
//                     </div>
//                     <div className="m-3">
//                         <button type="button" onClick={handleClick} className="btn btn-success">Click for current Location</button>
//                     </div>
//                     <div className="m-3">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} />
//                     </div>
//                     <button type="submit" className="m-3 btn btn-success">Submit</button>
//                     <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
//                 </form>
//             </div>
//         </div>
//     );
// }



















// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// export default function Signup() {
//     const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
//     const [address, setAddress] = useState("");  // To store the address fetched from geolocation
//     let navigate = useNavigate();

//     // Function to fetch the geolocation (latitude and longitude) and get the address
//     const handleClick = async (e) => {
//         e.preventDefault();
//         try {
//             // Get the user's geolocation (latitude and longitude)
//             const navLocation = () => new Promise((res, rej) => {
//                 navigator.geolocation.getCurrentPosition(res, rej);
//             });

//             const latlong = await navLocation();
//             const { latitude, longitude } = latlong.coords;

//             // Send the latitude and longitude to the backend to fetch the address
//             const response = await fetch("http://localhost:5000/api/auth/getlocation", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ lat: latitude, long: longitude }), // Send lat and long directly
//             });

//             const { location } = await response.json();
//             console.log(location);
//             setAddress(location);  // Set the fetched address in the address state
//             setCredentials({ ...credentials, geolocation: location }); // Update credentials with geolocation
//         } catch (error) {
//             console.error("Error fetching location:", error);
//         }
//     };

//     // Function to handle form submission and send data to the backend
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch("http://localhost:5000/api/auth/createuser", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name: credentials.name,
//                     email: credentials.email,
//                     password: credentials.password,
//                     location: credentials.geolocation,  // Send geolocation in the request
//                 }),
//             });

//             const json = await response.json();
//             console.log(json);

//             if (json.success) {
//                 localStorage.setItem('token', json.authToken);
//                 navigate("/login");  // Navigate to login on successful signup
//             } else {
//                 alert("Enter valid credentials");
//             }
//         } catch (error) {
//             console.error("Error during signup:", error);
//         }
//     };

//     // Function to handle input changes and update the state
//     const onChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };

//     return (
//         <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', height: '100vh' }}>
//             <Navbar />
//             <div className="container">
//                 <form className="w-50 m-auto mt-5 border bg-dark border-success rounded" onSubmit={handleSubmit}>
//                     <div className="m-3">
//                         <label htmlFor="name" className="form-label">Name</label>
//                         <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} />
//                     </div>
//                     <div className="m-3">
//                         <label htmlFor="email" className="form-label">Email address</label>
//                         <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} />
//                     </div>
//                     <div className="m-3">
//                         <label htmlFor="address" className="form-label">Address</label>
//                         <fieldset>
//                             <input type="text" className="form-control" name="address" placeholder="Click below for fetching address" value={address} onChange={(e) => setAddress(e.target.value)} disabled />
//                         </fieldset>
//                     </div>
//                     <div className="m-3">
//                         <button type="button" onClick={handleClick} className="btn btn-success">Click for current Location</button>
//                     </div>
//                     <div className="m-3">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} />
//                     </div>
//                     <button type="submit" className="m-3 btn btn-success">Submit</button>
//                     <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
//                 </form>
//             </div>
//         </div>
//     );
// }











// import React, { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import Navbar from '../components/Navbar';
// export default function Signup() {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
//   let [address, setAddress] = useState("");
//   let navigate = useNavigate()

//   const handleClick = async (e) => {
//     e.preventDefault();
//     let navLocation = () => {
//       return new Promise((res, rej) => {
//         navigator.geolocation.getCurrentPosition(res, rej);
//       });
//     }
//     let latlong = await navLocation().then(res => {
//       let latitude = res.coords.latitude;
//       let longitude = res.coords.longitude;
//       return [latitude, longitude]
//     })
//     // console.log(latlong)
//     let [lat, long] = latlong
//     console.log(lat, long)
//     const response = await fetch("http://localhost:5000/api/auth/getlocation", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ latlong: { lat, long } })

//     });
//     const { location } = await response.json()
//     console.log(location);
//     setAddress(location);
//     setCredentials({ ...credentials, [e.target.name]: location })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/auth/createuser", {
//       // credentials: 'include',
//       // Origin:"http://localhost:3000/login",
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })

//     });
//     const json = await response.json()
//     console.log(json);
//     if (json.success) {
//       //save the auth toke to local storage and redirect
//       localStorage.setItem('token', json.authToken)
//       navigate("/login")

//     }
//     else {
//       alert("Enter Valid Credentials")
//     }
//   }

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }

//   return (
//     <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
//       <div>
//       <Navbar />
//       </div>

//         <div className='container' >
//           <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
//             <div className="m-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
//             </div>
//             <div className="m-3">
//               <label htmlFor="email" className="form-label">Email address</label>
//               <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
//             </div>
//             <div className="m-3">
//               <label htmlFor="address" className="form-label">Address</label>
//               <fieldset>
//                 <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' value={address} onChange={(e)=>setAddress(e.target.value)} aria-describedby="emailHelp" />
//               </fieldset>
//             </div>
//             <div className="m-3">
//               <button type="button" onClick={handleClick} name="geolocation" className=" btn btn-success">Click for current Location </button>
//             </div>
//             <div className="m-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//               <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
//             </div>
//             <button type="submit" className="m-3 btn btn-success">Submit</button>
//             <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
//           </form>
//         </div>
//       </div>
//   )
// }










// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// export default function Signup() {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
//   let [address, setAddress] = useState("");
//   let navigate = useNavigate();

//   const handleClick = async (e) => {
//     e.preventDefault();

//     // Get the user's geolocation
//     let navLocation = () => {
//       return new Promise((res, rej) => {
//         navigator.geolocation.getCurrentPosition(res, rej);
//       });
//     }

//     let latlong = await navLocation().then(res => {
//       let latitude = res.coords.latitude;
//       let longitude = res.coords.longitude;
//       return [latitude, longitude];
//     });

//     // Log the coordinates to ensure they're correct
//     let [lat, long] = latlong;
//     console.log("Latitude:", lat, "Longitude:", long);

//     // Send coordinates to the backend to fetch location
//     const response = await fetch("http://localhost:5000/api/auth/getlocation", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ latlong: { lat, long } })
//     });

//     // Get the response from the backend (location)
//     const { location } = await response.json();
//     console.log("Location:", location);

//     // If the location is not found, use "Unknown location"
//     if (location === "Unknown location") {
//       alert("Could not determine your location.");
//     }

//     // Set the location address in the state
//     setAddress(location);

//     // Update the credentials with the fetched location
//     setCredentials({ ...credentials, geolocation: location });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Send user details, including the fetched location, to the backend to create a new user
//     const response = await fetch("http://localhost:5000/api/auth/createuser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: credentials.name,
//         email: credentials.email,
//         password: credentials.password,
//         location: credentials.geolocation
//       })
//     });

//     const json = await response.json();
//     if (json.success) {
//       // Store auth token and redirect to login
//       localStorage.setItem('token', json.authToken);
//       navigate("/login");
//     } else {
//       alert("Enter valid credentials.");
//     }
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', height: '100vh' }}>
//       <Navbar />
//       <div className='container'>
//         <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
//           <div className="m-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
//           </div>
//           <div className="m-3">
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
//           </div>
//           <div className="m-3">
//             <label htmlFor="address" className="form-label">Address</label>
//             <fieldset>
//               <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' value={address} onChange={(e) => setAddress(e.target.value)} />
//             </fieldset>
//           </div>
//           <div className="m-3">
//             <button type="button" onClick={handleClick} name="geolocation" className="btn btn-success">Click for current Location</button>
//           </div>
//           <div className="m-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
//           </div>
//           <button type="submit" className="m-3 btn btn-success">Submit</button>
//           <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
//         </form>
//       </div>
//     </div>
//   );
// }











import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
  let [address, setAddress] = useState("");
  let navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    let navLocation = () => {
      return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
      });
    }
    let latlong = await navLocation().then(res => {
      let latitude = res.coords.latitude;
      let longitude = res.coords.longitude;
      return [latitude, longitude]
    })
    // console.log(latlong)
    let [lat, long] = latlong
    console.log(lat, long)
    const response = await fetch("http://localhost:5000/api/auth/getlocation", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ latlong: { lat, long } })

    });
    const { location } = await response.json()
    console.log(location);
    setAddress(location);
    setCredentials({ ...credentials, [e.target.name]: location })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })

    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      //save the auth toke to local storage and redirect
      localStorage.setItem('token', json.authToken)
      navigate("/login")

    }
    else {
      alert("Enter Valid Credentials")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
      <div>
      <Navbar />
      </div>

        <div className='container' >
          <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="address" className="form-label">Address</label>
              <fieldset>
                <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' value={address} onChange={(e)=>setAddress(e.target.value)} aria-describedby="emailHelp" />
              </fieldset>
            </div>
            <div className="m-3">
              <button type="button" onClick={handleClick} name="geolocation" className=" btn btn-success"> Use current Location </button>
            </div>
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
            </div>
            <button type="submit" className="m-3 btn btn-success">Submit</button>
            <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
          </form>
        </div>
      </div>
  )
}
