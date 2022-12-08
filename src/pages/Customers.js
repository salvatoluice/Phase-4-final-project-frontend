import React, {useState, useEffect} from 'react'
import Header from '../components/Header';
import './customers.css';

const Customers = () => {

  const [customers, setCustomers] = useState([]);
  const getData = () =>
    fetch("https://ecommerce-production-921a.up.railway.app/customers")
      .then((res) => res.json())


      useEffect(() => {
        getData().then((data) => setCustomers(data))
      }, [])


  return (
    <>
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Customers' title='Customers Table' />
    </div>

    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <div className='customer_header'>
        <div><h1>Name</h1></div>
        <div><h1>Project Name</h1></div>
        <div><h1>Weeks</h1></div>
        <div><h1>Status</h1></div>
        <div><h1>Budget</h1></div>
        <div><h1>Location</h1></div>
      </div>
      {customers.map((customer) => {
        return (
          <div className='customers'>
            <div className='image'>
              <img src={customer.image} alt={customer.name}/>
              <p>{customer.name}</p>
            </div>
            <div><p>{customer.project_name}</p></div>
            <div><p>{customer.weeks}</p></div>
            <div><p>{customer.status}</p></div>
            <div><p>{customer.budget}</p></div>
            <div><p>{customer.location}</p></div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Customers