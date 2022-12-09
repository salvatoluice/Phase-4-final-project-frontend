import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const productAPI = "https://ecommerce-production-921a.up.railway.app/products";
const EditProduct = () => {
  const [productData, setProductData] = useState({});
  let { id } = useParams()
  let product_url = `https://ecommerce-production-921a.up.railway.app/products/${id}`;
  useEffect(() => {
    fetch(product_url)
    .then(response => response.json())
    .then(data => setProductData(data))
  }, [])
  let navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault()
      fetch(`${productAPI}/${id}`, {
         method: 'PATCH',
         headers: {
           'content-type': 'application/json',
           'Access-Control-Allow-Origin' : '*'
         },
         body: JSON.stringify({
             name: productData.name,
             image: productData.image,
             price: productData.price
         })
        })
        .then(response=>response.json())
        .then(data=>{
          console.log(data)   })
        navigate(`/ecommerce`)
      };
    const onFormChange = (e) => {
        setProductData({...productData,[e.target.name]:e.target.value});
    };


  return (
    <div>
      <form className="new=product-form" onSubmit={handleSubmit} >
      <input 
        placeholder="Name" 
        name='name'
        value={productData.name}
        type = "text"
        onChange={onFormChange}
      />
      <input 
        placeholder="ImageURL" 
        name='image'
        value={productData.image}
        type = "text"
        onChange={onFormChange}
      />
      <input 
        placeholder="Price" 
        name='price'
        value={productData.name}
        type = "number"
        onChange={onFormChange}
      />
      <input 
        type="submit" 
        value="Update" 
      />
    </form>
    </div>
  )
}

export default EditProduct;
