import {React,useContext} from 'react'
import { AppContext, useGlobalContext } from './Context'
import Movie from './Movie'
import Search from './Search'
function Home() {
    
  return (
    <div className='w-full h-full'>
        <Search></Search>
        <Movie></Movie>
    </div>
  )
}

export default Home
