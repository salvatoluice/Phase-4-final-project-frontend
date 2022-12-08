import React from 'react'
import './ecommerce.css'

const ProductItem = ({ product, onUpdateProduct, onDeleteProduct }) => {
    const { id, image, title, description, notes, rating } = product;

    
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
        </div>
    </div>
  )
}

export default ProductItem