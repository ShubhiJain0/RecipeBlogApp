import React from 'react'
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const RecipeRender = ({data, 
handleFavorite}) => {
  return (
    <>
      <div className="recipes-render">
        {data.map((recipeItem) => (
          <div className="recipe-card">
            <h2>{recipeItem.title}</h2>
            <img src={recipeItem.image_url} alt="" className="recipe-img" />
            <div className="overlay"></div>

            <FaHeart
              size={30}
              id="heart"
              onClick={() => handleFavorite(recipeItem)}
            />
            <Link style={{zIndex:"3", position:"absolute", color:"white", bottom:"5%", fontSize:"20px"}} to={`/recipe/${recipeItem.id}`}>Recipe Details</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default RecipeRender