import React, { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

const GlobalState = ({children}) => {
  const [searchParam, setSearchParam] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [favorite, setFavorite] = useState([]);
  return (
    <RecipeContext.Provider
      value={{
        searchParam,
        setSearchParam,
        recipeData,
        setRecipeData,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default GlobalState;
