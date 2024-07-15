import React, { useEffect, useReducer } from 'react'
import { getAll, search } from '../../Services/FoodService'
import Thumbnails from '../../Components/Thumbnails/Thumbnails'
import { useParams } from 'react-router-dom'
import Search from '../../Components/Search/Search'

const initialState ={foods: []}
const reducer = (state, action) =>{
    switch(action.type){
       case 'FOODS_LOADED':
        return {...state, foods:action.payload}
        default:
            return state
    }
}

export default function Home() {
    const[state, dispatcher] = useReducer(reducer,initialState)
    const {foods} = state
    const {searchTerm} = useParams()

    useEffect(()=>{

      const loadFoods = searchTerm ? search(searchTerm): getAll()
      loadFoods.then(foods => dispatcher({type:'FOODS_LOADED', payload:foods }))
    },[searchTerm])
  return (
    <>
    <div className='mt-3'>
      <Search />
        <Thumbnails foods={foods} />
    </div>
    </>
  )
}
