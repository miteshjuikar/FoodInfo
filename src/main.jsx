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
import AdvanceSearchId from './Components/AdvanceSearchId';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Home/>}/>
    <Route path='recipes' element={<Recipes />} />
    <Route path='recipes/:id' element={<RecipeDetails />} />
    <Route path='searchAd' element={<AdvanceSearch /> } />
    <Route path='searchAd/:id' element={<AdvanceSearchId /> } />
    <Route path='signUp' element={<SignUp /> } />
    <Route path='logIn' element={<LogIn /> } />
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
