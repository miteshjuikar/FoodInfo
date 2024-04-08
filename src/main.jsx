import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import { 
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  Link
} from 'react-router-dom'
import './App.css'
import Recipes from './Components/Recipes'
import RecipeDetails from './Components/RecipeDetails'
import Home from './Home'
import Layout from './Components/Layout';
import FilteredList from './Components/FilteredList';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Home/>}/>
    <Route path='/recipes' element={<Recipes />} />
    <Route path='/recipes/:id' element={<RecipeDetails />} />
    
    <Route path='/searchAd' element={<h1>Advance Search</h1> } />
    <Route path='/cart' element={<h1>Cart Page</h1>} />
    <Route path='/about' element={<h1>About Us</h1>} />
  </Route>
))

function App() {
  return(
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
