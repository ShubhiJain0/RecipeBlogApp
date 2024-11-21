import React, { useContext } from 'react'
import { RecipeContext } from '../Context'
import RecipeRender from './RecipeRender';
const Favorites = () => {
  const {favorite, setFavorite} = useContext(RecipeContext);
  if (favorite.length==0) return <h2>you have no favorites</h2>
  return (
    <div>
      <RecipeRender data={favorite}/>
    </div>
  )
}

export default Favorites