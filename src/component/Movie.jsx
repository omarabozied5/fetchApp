import './movie.css'

import Button from './Button'

const Movie = (props) => {
  const { title, images, description, price, id, onDelete } = props

  let hero = 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
  if (images?.length) {
    hero = images[0]
  }

  return (
    <section className="sec flex">
      <div className="card">
        <img src={hero} alt="" className="image" />
        <article key={id} className="article">
          <div style={{ width: '255px' }} className="box">
            <h1 className="title">{title}</h1>
            <h3 className="desc">{description}</h3>
            <p className="price">{price} $</p>
          </div>
        </article>
        <div className="btn">
          <Button text={'Delete'} onClick={() => onDelete(id)} />
        </div>
      </div>
    </section>
  )
  // eslint-disable-next-line prettier/prettier
}

export default Movie
