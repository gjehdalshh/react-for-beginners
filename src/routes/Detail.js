import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
	const {id} = useParams()
	const [movie, setMovie] = useState()
	const [loading, setLoading] = useState(true)

	const getMovie = async () => {
		const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		const json = await response.json()
		setMovie(json.data.movie)
		setLoading(false)
	}
	useEffect(() => {
		getMovie()
	}, [])
	console.log(movie)

	return (
		<div>
			{loading ? <h1>Loading...</h1> : 
				<div>
					<img src={movie.medium_cover_image} alt={movie.title}/>
					<h2>{movie.title}</h2>
					<div>{movie.description_intro}</div>
					<ul>
						{movie.genres.map(genre => (
							<li>{genre}</li>
						))}
					</ul>
				</div>
			}
		</div>
	)
}
export default Detail;