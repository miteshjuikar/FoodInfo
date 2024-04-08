import React from 'react'
import { useParams } from 'react-router-dom'
import Recipes from './Recipes';

export default function FilteredList() {
    const searchUrl = useParams();
    
  return (
    <>
      {searchUrl.id && <Recipes searchUrl={searchUrl.id} />}
    </>
  )
}
