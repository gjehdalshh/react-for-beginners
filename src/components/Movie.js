import PropTypes from "prop-types"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MovieStyle from "./Movie.module.css"

const Movie = ({id, rating, coverImg, title, summary, genres}) => {
	
	return (
		<div className={MovieStyle.movie}>
			<img src={coverImg} alt={title} />
			<div className={MovieStyle.contents}>
				<h2><Link to={`/movie/${id}`}>{title}</Link></h2>
				<p>{rating}</p>
				<p>{summary}</p>
				<ul className={MovieStyle.genreUl}>
					{genres.map(g => <li className={MovieStyle.genreLi} key={g}>{g}</li>)}
				</ul>
			</div>
		</div>
		
	)
}




Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Movie;