import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom'

function Movie() {
    const { movie } = useGlobalContext();
    return (
        <div className="container h-full lg:w-[95%] md:w-[80%] lg:ml-4 md:m-auto">
            <div className='grid h-full lg:grid-cols-3 md:grid-cols-1 pt-6 gap-14 text-center'>
                {
                    movie.map(item => {
                        const { imdbID, Poster, Title, Type, Year } = item;

                        return (
                            <NavLink to={`movie/${imdbID}`} key={imdbID}>

                                <div  className="rounded-xl overflow-hidden lg:w-[400px] lg:h-[300px] md:w-[300px] md:h-[200px] relative m-auto card border border-sky-900 ">
                                    <img src={Poster} className="rounded-xl w-full h-full object-contain" alt="image not available" />
                                    <div className='bg-zinc-600 w-full  z-10 absolute bottom-0 translate-y-1/2 origin-bottom hover:translate-y-0 transition-translate duration-300 ease-in-out   p-4  text-white' key={imdbID}>
                                        <h3 className='italic font-[montserrat] text-lg mb-2 pt-2 text-center'>{String(Title).toUpperCase()}</h3>
                                        <h4 className='italic font-[montserrat]'>{Type}</h4>
                                        <h5 className='italic font-[montserrat]'>{Year}</h5>
                                    </div>
                                </div>
                            </NavLink>
                        )

                    })
                }


            </div>
        </div>
    )
}

export default Movie

