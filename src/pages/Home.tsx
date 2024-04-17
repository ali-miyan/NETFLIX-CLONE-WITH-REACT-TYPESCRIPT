import Banner from "../components/Banner"
import MovieRow from "../components/MovieRow";
import endpoints from "../services/movieServices";

const Home = () => {
  return (
    <>
    <Banner />
    <MovieRow title={"upcoming"} url={endpoints.upcoming}/>
    <MovieRow title={"trending"} url={endpoints.trending}/>
    <MovieRow title={"top rated"} url={endpoints.topRated}/>
    <MovieRow title={"comedy"} url={endpoints.comedy}/>
    <MovieRow title={"popular"} url={endpoints.popular}/>
    </>
  )
}

export default Home