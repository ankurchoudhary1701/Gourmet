

// import React,{ useState} from 'react'
// import { Link } from 'react-router-dom';

// export default function Login() {
//   const [credentials, setCredentials] = useState({
    
//     email: '',
//     password: '',
    
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/loginuser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
         
//           email: credentials.email,
//           password: credentials.password
       
//         }),
//       });

//       const json = await response.json(); // Parse the response
//       console.log(json);

//       if (json.success) {
//         alert('login successfully!');
//       } else {
//         alert('login failed: ' + json.error);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('An error occurred during login. Please try again later.');
//     }
//   };

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };

//   return (
//     <div><div className="container">
//     <form onSubmit={handleSubmit}>
     

//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">
//           Email address
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           name="email"
//           value={credentials.email}
//           onChange={onChange}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="password" className="form-label">
//           Password
//         </label>
//         <input
//           type="password"
//           className="form-control"
//           name="password"
//           value={credentials.password}
//           onChange={onChange}
//           required
//         />
//       </div>

     
//       <button type="submit" className="m-3 btn btn-success">
//         Submit
//       </button>
//       <Link to="/createuser" className="m-3 btn btn-danger">
//         i'm a new user
//       </Link>
//     </form>
//   </div></div>
//   )
// }
// ============================================================================

// import React,{ useState} from 'react'   //vid 08 complete code
// import { Link,useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [credentials, setCredentials] = useState({
    
//     email: '',
//     password: '',
    
//   });
// let navigate =useNavigate()
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/loginuser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
         
//           email: credentials.email,
//           password: credentials.password
       
//         }),
//       });

//       const json = await response.json(); // Parse the response
//       console.log(json);

//       if (json.success) {
//         localStorage.setItem("authToken",json.authToken);
//         console.log(localStorage.getItem("authToken"));
//        navigate("/");
//       } else  {
//         alert('login failed: ' + json.error);
//       }
      
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('An error occurred during login. Please try again later.');
//     }
//   };

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };

//   return (
//     <div><div className="container">
//     <form onSubmit={handleSubmit}>
     

//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">
//           Email address
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           name="email"
//           value={credentials.email}
//           onChange={onChange}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="password" className="form-label">
//           Password
//         </label>
//         <input
//           type="password"
//           className="form-control"
//           name="password"
//           value={credentials.password}
//           onChange={onChange}
//           required
//         />
//       </div>

     
//       <button type="submit" className="m-3 btn btn-success">
//         Submit
//       </button>
//       <Link to="/createuser" className="m-3 btn btn-danger">
//         i'm a new user
//       </Link>
//     </form>
//   </div></div>
//   )
// }

// =======================================vid12
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('userEmail', credentials.email);
      localStorage.setItem('token', json.authToken);
      navigate("/");
    } else {
      alert("Enter Valid Credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <Navbar />
      <div className="container">
        <form className="w-50 m-auto mt-5 border bg-dark border-success rounded" onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/signup" className="m-3 mx-1 btn btn-danger">New User</Link>
        </form>
      </div>
    </div>
  );
}
