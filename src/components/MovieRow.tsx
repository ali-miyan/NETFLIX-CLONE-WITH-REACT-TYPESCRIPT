import { useEffect, useState } from "react"
import { movieRow, movie } from "../utils/netflixApi"
import axios from "axios"
import MovieItem from "./MovieItem"


const MovieRow = ({title,url}:movieRow) => {
    const [movies,setMovies] = useState([])
    useEffect(()=> {
        axios.get(url).then((res)=> setMovies(res.data.results))
    },[url])

  return (
    <>
    <h2 className="font-medium md:text-xl p-4 capitalize">{title}</h2>
    <div className="relative flex items-center">
        <div id={'slider'} className="flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            {movies.map((val:movie)=>(
                <>
                <h1 key={val.id}><MovieItem key={val.id} movie={val}/></h1>
                </>
            ))}
        </div>
    </div>
    </>
  )
}

export default MovieRow