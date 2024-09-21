import React, { useContext } from "react"

import FavoriteItem from "../components/Favorites/FavoriteItem"
import "./Products.css"
import { useStore } from "../hooks-store/store"

const Favorites = (props) => {
  const state = useStore()[0]
  const favouriteProducts = state.products.filter((prod) => prod.isFavorite)
  let content = <p className="placeholder">Got no favorites yet!</p>
  if (favouriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favouriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    )
  }
  return content
}

export default Favorites
