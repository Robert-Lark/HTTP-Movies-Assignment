import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
//import UpdateMovie from "./UpdateMovie";

function Movie({ addToSavedList }) {
	const { push } = useHistory();
	const [movie, setMovie] = useState(null);
	const params = useParams();

	const fetchMovie = (id) => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then((res) => setMovie(res.data))
			.catch((err) => console.log(err.response));
	};

	const saveMovie = () => {
		addToSavedList(movie);
	};
	const deleteMovie = (e) => {
		e.preventDefault();
	axios
		.delete(`http://localhost:5000/api/movies/${movie.id}`)
		.then((res) => {
			setMovie(res.data)
			push("/movies")
		})
.catch(err => console.log(err))
	};

	useEffect(() => {
		fetchMovie(params.id);
	}, [params.id]);

	if (!movie) {
		return <div>Loading movie information...</div>;
	}

	return (
		<div className="save-wrapper">
			<MovieCard movie={movie} />
			<div className="save-button" onClick={saveMovie}>
				Save
			</div>
			<div>
				<Button
					onClick={() => push(`/update-item/${movie.id}`)}
					value="value"
					variant="contained"
				>
					UPDATE MOVIE
				</Button>
			</div>

			<div>
				<Button onClick={deleteMovie} value="value" variant="contained">
					DELETE MOVIE
				</Button>
			</div>
		</div>
	);
}

export default Movie;
