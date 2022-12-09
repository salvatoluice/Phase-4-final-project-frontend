import React, { useState, useEffect } from 'react';
import './orders.css'
import Header from '../components/Header';

const Orders = () => {
  const [data, setData] = useState([]);
  const getData = () =>
    fetch("https://ecommerce-production-921a.up.railway.app/orders")
      .then((res) => res.json())
    useEffect(() => {
      getData().then((data) => setData(data));
    }, [])
    return (
      <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Amazon" title="Orders Table" />
      </div>
      <div className=' m-2 md:m-10 mt-24 p-2 md-p-10 bg-white rounded-3xl'>
        <div className='orderss'>
          <div className='data-header'>
            <div><h1>Image</h1></div>
            <div><h1>Items</h1></div>
            <div><h1>Customer Name</h1></div>
            <div><h1>Total Amount</h1></div>
            <div><h1>Status</h1></div>
            <div><h1>Location</h1></div>
          </div>
          {data?.map((item) => {
            return (
              <div className='data'>
                <div>
                  <img src={item.product_image} />
                </div>
                <div><p>{item.order_items}</p></div>
                <div><p>{item.customer_name}</p></div>
                <div><p style={{fontWeight: 'bold'}}>${item.total_amount}</p></div>
                <div><p>{item.status}</p></div>
                <div><p>{item.location}</p></div>
              </div>
              )
            }
            )}
        </div>
      </div>
      </>
    );
  };
  export default Orders;
