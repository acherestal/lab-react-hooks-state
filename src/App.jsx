import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // ✔ Dark Mode State
  const [darkMode, setDarkMode] = useState(false)

  // ✔ Cart State
  const [cart, setCart] = useState([])

  // ✔ Category Filter State
  const [category, setCategory] = useState("all")

  // Toggle Dark Mode handler
  const handleToggle = () => {
    setDarkMode(!darkMode)
  }

  // Add to Cart handler
  const handleAddToCart = (itemName) => {
    if (!cart.includes(itemName)) {
      setCart([...cart, itemName])
    }
  }

  // Category Change handler
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* ✔ Dark Mode Toggle */}
      <DarkModeToggle darkMode={darkMode} onToggle={handleToggle} />

      {/* ✔ Category Filter Dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* ✔ Pass props to ProductList */}
      <ProductList
        category={category}
        onAddToCart={handleAddToCart}
        cart={cart}
      />

      {/* ✔ Render Cart */}
      <Cart cart={cart} />
    </div>
  )
}

export default App
