import './ecommerce.css';

function Header({ productCount }) {
    return (
      <header>
        <h1>The product Store</h1>
        <h3> {productCount} products in store</h3>
      </header>
    );
  }
  
  export default Header;
  