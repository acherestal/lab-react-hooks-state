import products from "../data/products";
import ProductCard from "./ProductCard";

export const sampleProducts = products;

function ProductList({ category, onAddToCart, cart }) {
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            onAddToCart={onAddToCart}
            inCart={cart.includes(product.name)}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;
