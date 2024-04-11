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
import AdvanceSearch from './Components/AdvanceSearch';
import SignUp from './Components/SignUp';



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Home/>}/>
    <Route path='recipes' element={<Recipes />} />
    <Route path='recipes/:id' element={<RecipeDetails />} />
    <Route path='searchAd' element={<AdvanceSearch /> } />
    <Route path='signUp' element={<SignUp /> } />
    <Route path='logIn' element={<h1>Log in</h1>} />
    <Route path='cart' element={<h1>Cart Page</h1>} />
    <Route path='about' element={<h1>About Us</h1>} />
  </Route>
))

function App() {
  return(
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
