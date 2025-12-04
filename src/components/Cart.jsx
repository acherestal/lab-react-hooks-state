function Cart({ cart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => <p key={item}>{item} is in your cart.</p>)
      )}
    </div>
  );
}

export default Cart;
