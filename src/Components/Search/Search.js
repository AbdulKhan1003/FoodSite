import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Search() {

    const [term,setTerm] =useState('')
    const navigate = useNavigate()
    const {searchTerm} =useParams()

    const search = async () =>{
        term? navigate('./search/' + term): navigate('/')
    }

  return (
    <div className='container mb-3'>
           <div className="d-flex form mx-auto">
        <input className="form-control me-1" onKeyUp={(e)=>e.key==="Enter" && search} onChange={(e)=>{setTerm(e.target.value)}} defaultValue={searchTerm} type="search" placeholder="Search Foods" aria-label="Search" />
        <button className="btn btn-outline-success" onClick={search} type="submit">Search</button>
      </div>
    </div>
  )
}
