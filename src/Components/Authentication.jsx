import React from 'react'
import { Outlet } from 'react-router-dom'
import LogIn from './LogIn';
import { UserContext } from '../main';

export default function Authentication() {
    const [userL] = React.useContext(UserContext);
   
    if(userL){
        return <Outlet />
    }
    else{
       return <LogIn />
    }
}
