function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <p>{product.name}</p>
      <p>Category: {product.category}</p>

      <button
        data-testid={`product-${product.id}`}
        onClick={() => onAddToCart(product.name)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
