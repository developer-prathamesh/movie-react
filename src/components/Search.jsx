import {React,useState} from 'react'
import { useGlobalContext } from './Context'

function Search() {

  const {query,setQuery,error} = useGlobalContext();
  return (
    <div className='flex flex-col items-center justify-center p-6 '>
      <h1 className='text-white text-center'> Search Your Movie here</h1> 
      <div className='mt-4 w-[80%]'>
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}  className='px-4 py-2 w-[100%] rounded-lg outline-none' />
      </div>
      <div className='card-error'>
        <h2>{error.show && error.msg}</h2>
      </div>
    </div>
  )
}

export default Search
