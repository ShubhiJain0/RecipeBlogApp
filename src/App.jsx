import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Favorites from './Components/Favorites'
import RecipeItem from './Components/RecipeItem'
import NavBar from './Components/NavBar'
import GlobalState from './Context'
function App() {
  
  return (
    <>
      <NavBar />
      <GlobalState>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/favorites" element={<Favorites />}></Route>

          <Route path="/recipe/:id" element={<RecipeItem />}></Route>
        </Routes>
      </GlobalState>
    </>
  );
}

export default App
