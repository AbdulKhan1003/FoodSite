import React from 'react'
import Stars from './Stars'

export default function Thumbnails({foods}) {
  return (
    <div className='container'>
        <div className="row d-flex">
      {foods.map((food)=>{
         return <div className="col-md-4" key={food.id}>
            <div className="card mb-4">
  <img src={`/images/${food.imageUrl}`} className="card-img-top" alt={food.name} />
  <div className="card-body">
    <h5 className="card-title">{food.name}</h5>
    <p>{food.stars}❤️Rating</p>
    <p>{food.origins.map((origin,index)=>{return <span className='badge me-3' key={index}>{origin}</span>})}  <span className='float-end'>⏲️ {food.cookTime} mins</span></p>
    
    <p className='m-0 p-0'>${food.price}</p>    
  </div>
</div>
        </div>
      })}
        </div>
    </div>
  )
}
