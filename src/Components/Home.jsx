import React, { useContext, useEffect, useState } from 'react'
import { RecipeContext } from '../Context';
import RecipeRender from './RecipeRender';
const Home = () => {
  const {searchParam, setSearchParam} =useContext(RecipeContext);
  const {recipeData, setRecipeData} = useContext(RecipeContext);
  const {favorite, setFavorite} = useContext(RecipeContext);
  async function fetchData(){
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
    );

    const result = await response.json();
    console.log(result.data.recipes);
    setRecipeData(result.data.recipes);
    console.log(recipeData);
    setSearchParam("");
  }
  function handleKeyDown(e){
    if(e.key ==='Enter'){
      fetchData();
    }
  }
  function handleFavorite(recipeItem){
    const isAlreadyFavorite = favorite.some(fav=>fav.id ===recipeItem.id);
    if(isAlreadyFavorite) return;
    setFavorite([...favorite, recipeItem])
    console.log(favorite);
    
  }
  return (
    <div>
      <div className='searchInput'>
      <label htmlFor="search">Search Recipe</label>
      <input
        type="text"
        id="search"
        placeholder="search here"
        value={searchParam}
        onChange={(e) => {
          setSearchParam(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      </div>
        <RecipeRender data = {recipeData} handleFavorite={handleFavorite}/>
    </div>
  );
}

export default Home