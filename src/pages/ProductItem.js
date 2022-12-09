import React from 'react';
import { Link } from 'react-router-dom';
import './ecommerce.css';

const ProductItem = ({ product, onDeleteProduct }) => {
  const { id } = product;

  function handleDeleteProduct() {
    fetch(`https://ecommerce-production-921a.up.railway.app/products/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteProduct(product);
      }
    });
  }

  return (
    <div className="product-item card">
      <img src={product.image} alt={product.name} />
      <div className="details">
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <button onClick={handleDeleteProduct}>Delete</button>
        <button className='edit'>
          <Link to={`/edit/${product.id}`}>Edit</Link>
        </button>
      </div>
    </div>
  )
}

export default ProductItem