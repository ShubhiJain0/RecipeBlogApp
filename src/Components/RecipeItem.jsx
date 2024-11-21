import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeItem = () => {
  const {id} =useParams();

  console.log(id);
  
  const [recipeDetails, setRecipeDetails] = useState("");
  async function fetchData() {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const result = await response.json();
    console.log(result.data.recipe);
    setRecipeDetails(result.data.recipe);
  }
  useEffect(()=>{
    fetchData();
  },[])
  if(!recipeDetails) return <h1>Choose a recipe</h1>
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        {recipeDetails.title}
      </h1>

      <div className="container">
        {recipeDetails ? (
          <div className="left">
            <img src={recipeDetails.image_url} alt="" />
            <h1>Cooking time: {recipeDetails.cooking_time} mins</h1>
            <h2>Servings: {recipeDetails.servings}</h2>
          </div>
        ) : null}
        <div className="right">
          {recipeDetails.ingredients ? (
            <ul>
              {recipeDetails.ingredients.map((ingredient) => (
                <li>
                  {ingredient.quantity} {ingredient.cups}{" "}
                  {ingredient.description}
                </li>
              ))}
            </ul>
          ) : (
            <h2>Loading! Kindly wait.</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default RecipeItem