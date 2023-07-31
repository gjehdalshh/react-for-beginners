import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieStyle from "../components/Movie.module.css"

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
				<div className={MovieStyle.detailContainer} style={{backgroundImage: `url(`+movie.background_image+')'}}>
					<div className={MovieStyle.detailMovie}>
						<div><img src={movie.medium_cover_image} alt={movie.title}/></div>
						<div className={MovieStyle.rightContents}>
							<div><h1>{movie.title}</h1></div>
							<div className={MovieStyle.flex}>
								<ul className={MovieStyle.genreUl}>
									{movie.genres.map(genre => (
										<li className={MovieStyle.genreLi}>{genre}</li>
									))}
								</ul>
								<span>{movie.rating}</span>
							</div>
							<div>{movie.description_intro}</div>
						</div>
					</div>
				</div>
			}
		</div>
	)
}
export default Detail;