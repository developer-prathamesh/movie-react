import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

export const API_URL = `https://www.omdbapi.com/?apikey=d74eb1d0`
const AppContext  = React.createContext()

const AppProvider = ({children})=>{
    const [isLoading,setIsLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const [error,setError] = useState({show:false,msg:""});
    const [query,setQuery] = useState('batman');
    const getMovies=async(url)=>{
        setIsLoading(true)
        await fetch(url,{
            method:"GET"
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.Response=="True"){
                setIsLoading(false)
                setMovie(data.Search)
            }else{
                setError({show:true,msg:data.Error})
            }
        })
        .catch(error=>console.log(error))
    }
    useEffect(() => {
        let timeout = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`);
        },300)
        return ()=>clearTimeout(timeout)
    }, [query])
    

    return (
        <AppContext.Provider value={{isLoading,error,movie,query,setQuery}}>
            {children}
        </AppContext.Provider>
    )
}

// custom hooks
const useGlobalContext=()=>{
    return useContext(AppContext)
}


export {AppProvider,AppContext,useGlobalContext}
