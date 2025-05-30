

// import React, { useEffect, useState } from 'react';
// import Card from '../components/Card';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function Home() {
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItems, setFoodItems] = useState([]);
//   const [search, setSearch] = useState('');

//   const loadFoodItems = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/foodData", {
//         method: 'GET', // Use GET method
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setFoodItems(data.foodData);  // Correctly set food items
//         setFoodCat(data.foodCategory);  // Correctly set food categories
//       } else {
//         console.error("Failed to fetch food data");
//       }
//     } catch (error) {
//       console.error("Error fetching food items:", error);
//     }
//   };

//   useEffect(() => {
//     loadFoodItems();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//           <div className="carousel-inner" id="carousel">
//             <div className="carousel-caption" style={{ zIndex: "5", position: "absolute", top: "10%" }}>
//               <div className="d-flex justify-content-center">
//                 <input
//                   className="form-control me-2 w-75 bg-white text-dark"
//                   type="search"
//                   placeholder="Search in here..."
//                   aria-label="Search"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//                 <button className="btn text-white bg-danger" onClick={() => setSearch('')}>X</button>
//               </div>
//             </div>
//             <div className="carousel-item active">
//               <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: "brightness(70%)" }} alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" style={{ filter: "brightness(70%)" }} alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100" style={{ filter: "brightness(70%)" }} alt="..." />
//             </div>
//           </div>
//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//       <div className="container">
//         {foodCat.length > 0 && foodCat.map((data) => (
//           <div className="row mb-3" key={data.id}>
//             <div className="fs-3 m-3">{data.CategoryName}</div>
//             <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
//             {foodItems.length > 0 ? foodItems.filter(
//               (items) => items.CategoryName === data.CategoryName && items.name.toLowerCase().includes(search.toLowerCase())
//             ).map((filterItems) => (
//               <div key={filterItems.id} className="col-12 col-md-6 col-lg-3">
//                 <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} />
//               </div>
//             )) : <div>No Such Data</div>}
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import Card from '../components/Card';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function Home() {
//   const [foodCat, setFoodCat] = useState([]); // State to hold food categories
//   const [foodItems, setFoodItems] = useState([]); // State to hold food items
//   const [search, setSearch] = useState(''); // State to hold search input

//   const loadFoodItems = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/foodData", {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setFoodItems(data.foodData);  // Set food items
//         setFoodCat(data.foodCategory);  // Set food categories
//       } else {
//         console.error("Failed to fetch food data");
//       }
//     } catch (error) {
//       console.error("Error fetching food items:", error);
//     }
//   };

//   useEffect(() => {
//     loadFoodItems(); // Load food items when component is mounted
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//          <div className="carousel-inner" id="carousel">
//            {/* Search Form */}
//            <div className="carousel-caption d-none d-md-block" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
//              <form className="d-flex justify-content-center">
//                <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)} // Handle search input
//                 style={{ maxWidth: '500px' }}
//               />
//             </form>
//           </div>

//           {/* Images in Carousel */}
//           {["https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1524391931851-7bdd18f138c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ].map((imgSrc, index) => (
//             <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//               <img src={imgSrc} className="d-block w-100" style={{ filter: "brightness(100%)",width:"fit-content",objectFit:"fill" }} alt={`carousel slide ${index}`} />
//             </div>
//           ))}
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//       {/* Food Categories and Items */}
//       <div className="container">
//         {foodCat.length > 0 && foodCat.map((data) => (
//           <div className="row mb-3" key={data.id}>
//             <div className="fs-3 m-3">{data.CategoryName}</div>
//             <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
//             {foodItems.length > 0 ? foodItems.filter(
//               (items) => items.CategoryName === data.CategoryName && items.name.toLowerCase().includes(search.toLowerCase())
//             ).map((filterItems) => (
//               <div key={filterItems.id} className="col-12 col-md-6 col-lg-3">
//                 <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} />
//               </div>
//             )) : <div>No Such Data</div>}
//           </div>
//         ))}
//       </div>
      
//       <Footer />
//     </div>
//   );
// }







// import React, { useEffect, useState } from 'react';
// import Card from '../components/Card';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function Home() {
//   const [foodCat, setFoodCat] = useState([]); // State to hold food categories
//   const [foodItems, setFoodItems] = useState([]); // State to hold food items
//   const [search, setSearch] = useState(''); // State to hold search input

//   const loadFoodItems = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/foodData", {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setFoodItems(data.foodData);  // Set food items
//         setFoodCat(data.foodCategory);  // Set food categories
//       } else {
//         console.error("Failed to fetch food data");
//       }
//     } catch (error) {
//       console.error("Error fetching food items:", error);
//     }
//   };

//   useEffect(() => {
//     loadFoodItems(); // Load food items when component is mounted
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//         <div className="carousel-inner" id="carousel">
//           {/* Search Form */}
//           <div
//             className="carousel-caption d-none d-md-block"
//             style={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               zIndex: 2,
//             }}
//           >
//             <form className="d-flex justify-content-center">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)} // Handle search input
//                 style={{ maxWidth: '500px' }}
//               />
//             </form>
//           </div>

//           {/* Images in Carousel */}
//           {[
//             "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1524391931851-7bdd18f138c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           ].map((imgSrc, index) => (
//             <div
//               className={`carousel-item ${index === 0 ? 'active' : ''}`}
//               key={index}
//             >
//               <img
//                 src={imgSrc}
//                 className="d-block w-100"
//                 style={{
//                   objectFit: 'cover', // Adjust to cover the full carousel
//                   height: '500px',    // Set a consistent height
//                 }}
//                 alt={`carousel slide ${index}`}
//               />
//             </div>
//           ))}
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//       {/* Food Categories and Items */}
//       <div className="container">
//         {foodCat.length > 0 &&
//           foodCat.map((data) => (
//             <div className="row mb-3" key={data.id}>
//               <div className="fs-3 m-3">{data.CategoryName}</div>
//               <hr
//                 id="hr-success"
//                 style={{
//                   height: '4px',
//                   backgroundImage:
//                     '-webkit-linear-gradient(left, rgb(0, 255, 137), rgb(0, 0, 0))',
//                 }}
//               />
//               {foodItems.length > 0 ? (
//                 foodItems
//                   .filter(
//                     (items) =>
//                       items.CategoryName === data.CategoryName &&
//                       items.name.toLowerCase().includes(search.toLowerCase())
//                   )
//                   .map((filterItems) => (
//                     <div key={filterItems.id} className="col-12 col-md-6 col-lg-3">
//                       <Card
//                         foodName={filterItems.name}
//                         item={filterItems}
//                         options={filterItems.options[0]}
//                         ImgSrc={filterItems.img}
//                       />
//                     </div>
//                   ))
//               ) : (
//                 <div>No Such Data</div>
//               )}
//             </div>
//           ))}
//       </div>

//       <Footer />
//     </div>
//   );
// }





// import React, { useEffect, useState } from 'react';
// import Card from '../components/Card';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function Home() {
//   const [foodCat, setFoodCat] = useState([]); // State to hold food categories
//   const [foodItems, setFoodItems] = useState([]); // State to hold food items
//   const [search, setSearch] = useState(''); // State to hold search input

//   const loadFoodItems = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/foodData", {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setFoodItems(data.foodData);  // Set food items
//         setFoodCat(data.foodCategory);  // Set food categories
//       } else {
//         console.error("Failed to fetch food data");
//       }
//     } catch (error) {
//       console.error("Error fetching food items:", error);
//     }
//   };

//   useEffect(() => {
//     loadFoodItems(); // Load food items when component is mounted
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//         <div className="carousel-inner" id="carousel">
//           {/* Search Form */}
//           <div
//             className="carousel-caption d-none d-md-block"
//             style={{
//               position: 'absolute',
//               bottom: '10%', // Place the search bar near the bottom
//               left: '50%',
//               transform: 'translateX(-50%)', // Center horizontally
//               zIndex: 2,
//             }}
//           >
//             <form className="d-flex justify-content-center">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)} // Handle search input
//                 style={{ maxWidth: '500px' }}
//               />
//             </form>
//           </div>

//           {/* Images in Carousel */}
//           {[
//             "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1524391931851-7bdd18f138c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           ].map((imgSrc, index) => (
//             <div
//               className={`carousel-item ${index === 0 ? 'active' : ''}`}
//               key={index}
//             >
//               <img
//                 src={imgSrc}
//                 className="d-block w-100"
//                 style={{
//                   objectFit: 'cover', // Adjust to cover the full carousel
//                   height: '500px',    // Set a consistent height
//                 }}
//                 alt={`carousel slide ${index}`}
//               />
//             </div>
//           ))}
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//       {/* Food Categories and Items */}
//       <div className="container">
//         {foodCat.length > 0 &&
//           foodCat.map((data) => (
//             <div className="row mb-3" key={data.id}>
//               <div className="fs-3 m-3">{data.CategoryName}</div>
//               <hr
//                 id="hr-success"
//                 style={{
//                   height: '4px',
//                   backgroundImage:
//                     '-webkit-linear-gradient(left, rgb(0, 255, 137), rgb(0, 0, 0))',
//                 }}
//               />
//               {foodItems.length > 0 ? (
//                 foodItems
//                   .filter(
//                     (items) =>
//                       items.CategoryName === data.CategoryName &&
//                       items.name.toLowerCase().includes(search.toLowerCase())
//                   )
//                   .map((filterItems) => (
//                     <div key={filterItems.id} className="col-12 col-md-6 col-lg-3">
//                       <Card
//                         foodName={filterItems.name}
//                         item={filterItems}
//                         options={filterItems.options[0]}
//                         ImgSrc={filterItems.img}
//                       />
//                     </div>
//                   ))
//               ) : (
//                 <div>No Such Data</div>
//               )}
//             </div>
//           ))}
//       </div>

//       <Footer />
//     </div>
//   );
// }







import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState('');

  const loadFoodItems = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFoodItems(data.foodData);
        setFoodCat(data.foodCategory);
      } else {
        console.error("Failed to fetch food data");
      }
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  useEffect(() => {
    loadFoodItems();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000" // Automatically change slides every 3 seconds
      >
        <div className="carousel-inner" id="carousel">
          {/* Search Form */}
          <div
            className="carousel-caption d-none d-md-block"
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
            }}
          >
            <form className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ maxWidth: '500px' }}
              />
            </form>
          </div>

          {/* Images in Carousel */}
          {[
            "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1524391931851-7bdd18f138c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ].map((imgSrc, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <img
                src={imgSrc}
                className="d-block w-100"
                style={{
                  objectFit: 'cover',
                  height: '500px',
                }}
                alt={`carousel slide ${index}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Food Categories and Items */}
      <div className="container">
        {foodCat.length > 0 &&
          foodCat.map((data) => (
            <div className="row mb-3" key={data.id}>
              <div className="fs-3 m-3">{data.CategoryName}</div>
              <hr
                id="hr-success"
                style={{
                  height: '4px',
                  backgroundImage:
                    '-webkit-linear-gradient(left, rgb(0, 255, 137), rgb(0, 0, 0))',
                }}
              />
              {foodItems.length > 0 ? (
                foodItems
                  .filter(
                    (items) =>
                      items.CategoryName === data.CategoryName &&
                      items.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((filterItems) => (
                    <div key={filterItems.id} className="col-12 col-md-6 col-lg-3">
                      <Card
                        foodName={filterItems.name}
                        item={filterItems}
                        options={filterItems.options[0]}
                        ImgSrc={filterItems.img}
                      />
                    </div>
                  ))
              ) : (
                <div>No Such Data</div>
              )}
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
}
