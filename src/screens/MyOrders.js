





import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/auth/myOrderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container'>
                <div className='row'>

                    {orderData !== {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                    {arrayData.Order_date ? <div className='m-auto mt-5'>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                                                                <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">{arrayData.name}</h4>
                                                                    <div className='container w-100 p-0' style={{ height: "40px" }}>
                                                                        <span className='m-2'>{arrayData.qty}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-7' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                        {/* <span className='m-1'>{data}</span> */}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>


            </div>

            <Footer />
        </div>
    )
}








// import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function MyOrder() {
//     const [orderData, setOrderData] = useState([]);

//     const fetchMyOrder = async () => {
//         const response = await fetch("http://localhost:5000/api/auth/myOrderData", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email: localStorage.getItem('userEmail'),
//             }),
//         });

//         const result = await response.json();
//         setOrderData(result.orderData.order_data || []);
//     };

//     useEffect(() => {
//         fetchMyOrder();
//     }, []);

//     return (
//         <div>
//             <Navbar />
//             <div className="container">
//                 <h1 className="text-center mt-5 mb-3">My Orders</h1>
//                 {orderData.length > 0 ? (
//                     orderData.map((order, orderIndex) => (
//                         <div key={orderIndex} className="mb-5">
//                             <h3 className="text-success">Order Date: {order[0]?.Order_date}</h3>
//                             <hr />
//                             <div className="row">
//                                 {order.map((item, itemIndex) => (
//                                     item.Order_date ? null : (
//                                         <div
//                                             key={itemIndex}
//                                             className="col-12 col-md-6 col-lg-4 mb-3"
//                                         >
//                                             <div className="card" style={{ width: '18rem' }}>
//                                                 <img
//                                                     src={item.img || "https://via.placeholder.com/150"}
//                                                     className="card-img-top"
//                                                     alt={item.name}
//                                                     style={{
//                                                         height: '200px',
//                                                         objectFit: 'cover',
//                                                     }}
//                                                 />
//                                                 <div className="card-body">
//                                                     <h5 className="card-title">{item.name}</h5>
//                                                     <p className="card-text">
//                                                         Quantity: {item.qty} <br />
//                                                         Size: {item.size} <br />
//                                                         Price: ₹{item.price}/-
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )
//                                 ))}
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <h3 className="text-center">You have no orders yet!</h3>
//                 )}
//             </div>
//             <Footer />
//         </div>
//     );
// }
