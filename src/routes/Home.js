import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import MovieStyle from "../components/Movie.module.css";

const Home = () => {
		const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([])
  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies)
    setLoading(false)
	console.log(movies)
  }
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className={MovieStyle.homeContainer}>
      {loading ? <h1>Loading...</h1> : <div className={MovieStyle.homeMovies}>{movies.map(movie => (
        <Movie key={movie.id} id={movie.id} rating={movie.rating} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres}/>
      ))}</div>}
    </div>
  );
}
export default Home;