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
import Authentication from './Components/Authentication';
import { createContext } from 'react';
import Cart from './Components/Cart';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Home/>}/>
    <Route path='recipes' element={<Recipes />} />
    <Route path='recipeDetail' element={<RecipeDetails />} />
    <Route path='searchAd' element={<AdvanceSearch /> } />
    <Route path='searchAd/:id' element={<AdvanceSearchId /> } />
    <Route path='signUp' element={<SignUp /> } />
    <Route path='logIn' element={<LogIn />} />
    <Route element={<Authentication />}>
        <Route path='cart' element={<Cart />} />
        <Route path='about' element={<h1>About Us</h1>} />
    </Route>
    
  </Route>
))

export const UserContext = createContext()

function App() {
  const [ userL , setUserL ] = React.useState(null)
  return(


     <UserContext.Provider value={[userL, setUserL]}> 
        <RouterProvider router={router} />
     </UserContext.Provider>

  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
