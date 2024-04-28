import './app.css'

import React, { useEffect, useState } from 'react'

import MovieList from './component/MovieList'

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState(null)

  const fetchHandler = async () => {
    setIsLoading(true)
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    setProducts(data.products)
    setIsLoading(false)
  }
  const handleDelete = async (id) => {
    try {
      // Send DELETE request to backend API
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        // If the delete request is successful, update the state to remove the deleted movie
        setProducts(products.filter((product) => product.id !== id))
        console.log(`Movie with ID ${id} deleted`)
        setNotification('Item deleted successfully')
      } else {
        // If the delete request fails, log the error
        console.error('Failed to delete movie')
        setNotification('Faild to delete card')
      }
    } catch (error) {
      console.error('Error deleting movie:', error)
    }
  }
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null) // Remove notification message after 3 seconds
      }, 3000)

      return () => clearTimeout(timer) // Cleanup the timer on component unmount
    }
  }, [notification])

  return (
    <React.Fragment>
      <section className="buttoon-sec">
        <button onClick={fetchHandler}>Fetch Products</button>
      </section>
      <section className="movie-list">
        {!isLoading && products.length > 0 && (
          <MovieList products={products} onDelete={handleDelete} />
        )}
        {!isLoading && products.length === 0 && (
          <p style={{ color: 'red' }}>No Products Found !!</p>
        )}
        {isLoading && <p style={{ color: 'green' }}>Loading....</p>}
      </section>
      {notification && <div className="notification">{notification}</div>}
    </React.Fragment>
  )
}

export default App
