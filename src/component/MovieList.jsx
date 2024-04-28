import './movieList.css'

import Movie from './Movie'

const MovieList = ({ products, onDelete }) => {
  return (
    <ul>
      {products.map((product) => (
        <Movie
          key={product.description.length}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          images={product.images}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default MovieList
