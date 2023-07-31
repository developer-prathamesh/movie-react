import { React, useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { API_URL } from './Context'
function Single() {
    const { id } = useParams();
    const [isLoading, setIsLoading, error, setError] = useState(true);
    const [movie, setMovie] = useState("");

    const getMovies = async (url) => {
        await fetch(url, {
            method: "GET"
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.Response == "True") {
                    setIsLoading(false)
                    setMovie(data)
                }
            })
            .catch(error => console.log(error))
    }
    useEffect(() => {
        let timeout = setTimeout(() => {
            console.log(id);
            getMovies(`${API_URL}&i=${id}`);
        }, 300)
        return () => clearTimeout(timeout)
    }, [id])

    if (isLoading == true) {
        return (
            <div className='w-full h-[100vh] bg-slate-700'>
                <div className='text-center font-[montserrat] text-white pt-28 text-xl'>
                   <h1 className='text-3xl text-red-500'>Loading . . .</h1> 
                </div>
            </div>
        )
    }
    return (
        <div className='w-full h-[100vh] bg-slate-700 font-[montserrat] flex items-center justify-center'>
            <div className='container flex w-[80%] bg-white rounded-lg overflow-hidden'>
                <div className='w-[80%]'>
                    <img src={movie.Poster} className="items-center h-full" alt="" />
                </div>
                <div className='items-center mt-8 '>
                    <h3 className='m-2 font-bold'>{movie.Title}</h3>
                    <h4 className='m-2'>{movie.Year}</h4>
                    <p className='m-2'>{movie.DVD}</p>
                    <p className='m-2 mr-4 whitespace-pre-wrap text-black leading-8' >{movie.Plot}</p>

                    <NavLink to='/'>
                        <button className='m-2 border border-gray-500 px-8 py-4  text-black hover:bg-gray-500 hover:text-white transition-hover duration-300 rounded-lg'>Go Back</button>
                    </NavLink>

                </div>

            </div>

        </div>
    )


}

export default Single
