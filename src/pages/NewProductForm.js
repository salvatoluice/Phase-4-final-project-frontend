import React, { useState } from 'react';
import './ecommerce.css';

const initialState = {
  name: "",
  image: "",
  price: "",
  };
const NewProductForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState(initialState);
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
      });
    }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://ecommerce-production-921a.up.railway.app/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newProduct) => {
        setFormData(initialState);
        onAddProduct(newProduct);
      });
  }
  return (
    <div className="form-card">
      <h2>New product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="title">Name: </label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-input">
          <label htmlFor="image">Image URL: </label>
          <input
            type="text"
            id="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
        <label htmlFor="notes">Price: </label>
        <input
          type="text"
          id="price"
          value={formData.price}
          onChange={handleChange}
        />
        </div>
      <button type="submit">Add</button>
      </form>

    </div>
  )
}

export default NewProductForm