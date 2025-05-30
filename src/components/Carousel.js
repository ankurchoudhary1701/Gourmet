// import React from 'react'

// export default function Carousal() {
//   return (
{/* <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit: "contain !important "}}>
  <div className="carousel-inner" id = 'carousel'>
<div className= 'carousel-caption' style={{zIndex:"10"}}>
<form class="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white  bg - success" type="submit">Search</button>
    </form>
</div>

    <div className="carousel-item active">
    <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZGllfGVufDB8fDB8fHww" className="d-block w-100"style={{filter: "brightness(30%)"}}  alt="..."/>
      </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600" style={{filter: "brightness(30%)"}}  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100"style={{filter: "brightness(30%)"}}  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
//   )
// }



// ======================================================
// import React from 'react';

// export default function Carousal() {
//   return (
//     <div
//       id="carouselExampleFade"
//       className="carousel slide carousel-fade"
//       data-bs-ride="carousel"
//       style={{ objectFit: "contain" }}
//     >
//       <div className="carousel-inner" id="carousel">
//         <div className="carousel-caption" style={{ zIndex: "10" }}>
//           <form className="d-flex">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               className="btn btn-outline-success text-white bg-success"
//               type="submit"
//             >
//               Search
//             </button>
//           </form>
//         </div>

//         <div className="carousel-item active">
//           <img
//             src="https://images.unsplash.com/photo-1550547660-d9450f859349"
//             className="d-block w-100"
//             style={{ filter: "brightness(30%)" }}
//             alt="Carousel item 1"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://via.placeholder.com/800x400"
//             className="d-block w-100"
//             style={{ filter: "brightness(30%)" }}
//             alt="Carousel item 2"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://via.placeholder.com/800x400"
//             className="d-block w-100"
//             style={{ filter: "brightness(30%)" }}
//             alt="Carousel item 3"
//           />
//         </div>
//       </div>
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleFade"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleFade"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }
// =========================================
// import React from 'react';

// export default function Carousal() {
//   return (
//     <div
//       id="carouselExampleFade"
//       className="carousel slide carousel-fade"
//       data-bs-ride="carousel"
//       style={{ position: "relative" }}
//     >
//       <div className="carousel-inner" id="carousel">
//         {/* Search Bar Overlay */}
//         <div className="carousel-caption" style={{ zIndex: "10" }}>
//           <form className="d-flex">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               className="btn btn-outline-success text-white bg-success"
//               type="submit"
//             >
//               Search
//             </button>
//           </form>
//         </div>

//         {/* Carousel Items */}
//         <div className="carousel-item active">
//           <img
//             src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZGllfGVufDB8fDB8fHww"
//             className="d-block w-100"
//             style={{
//               height: "100vh", // Full height of the viewport
//               width: "100%",
//               objectFit: "cover", // Ensures no blank spaces
//             }}
//             alt="..."
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
//             className="d-block w-100"
//             style={{
//               height: "100vh",
//               width: "100%",
//               objectFit: "cover",
//             }}
//             alt="..."
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
//             className="d-block w-100"
//             style={{
//               height: "100vh",
//               width: "100%",
//               objectFit: "cover",
//             }}
//             alt="..."
//           />
//         </div>
//       </div>

//       {/* Carousel Controls */}
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleFade"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleFade"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }





// =======================================vid 12
import React from 'react'

export default function Carousel() {
    return (
        <div>

            <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

                <div className="carousel-inner " id='carousel'>
                    <div class=" carousel-caption  " style={{ zIndex: "9" }}>
                        <form className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                            <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type in..." aria-label="Search" />
                            <button className="btn text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active" >
                        <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}
