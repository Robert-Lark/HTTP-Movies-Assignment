import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Form from "react-basic-form";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, useHistory } from "react-router-dom";
const useStyles = makeStyles(() => ({
	updateForm: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyItems: "center",
	},
}));
const initialState = {
	id: "",
	title: "",
	director: "",
	metascore: "",
	stars: [],
};

function UpdateMovie(props) {
	const [update, setUpdate] = useState(initialState);
	const { push } = useHistory();
	const { id } = useParams();
	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then((res) => {
				setUpdate(res.data);
			})
			.catch((err) => console.log(err));
	}, [id]);

	const classes = useStyles();

	const submit = (e) => {
		e.preventDefault();

		console.log(update);
		axios
			.put(`http://localhost:5000/api/movies/${id}`, update)
			.then((res) => {
				setUpdate(res.data)
				push("/movies")
			})
			.catch((err) => console.log("error: ", err));
	};

	const changeHandler = (e) => {
		setUpdate({ ...update, [e.target.name]: e.target.value });
	};

	return (
		<Grid container className={classes.updateForm}>
			<Form onSubmit={(data) => console.log(data)}>
				<Form.Element
					onChange={changeHandler}
					label="id"
					name="id"
					value={update.id}
					required
				/>
				<Form.Element
					onChange={changeHandler}
					label="title"
					name="title"
					type="email"
					value={update.title}
					required
				/>
				<Form.Element
					onChange={changeHandler}
					label="director"
					value={update.director}
					name="director"
					required
				/>
				<Form.Element
					label="metascore"
					name="metascore"
					value={update.metascore}
					type="email"
					onChange={changeHandler}
					required
				/>
				<h4>ACTORS</h4>
				<Form.Element
					onChange={changeHandler}
					label="stars"
					value={update.stars}
					name="stars"
					type="text"
					required
				/>
			</Form>
			<Button onClick={submit} value="value" variant="contained">
				UPDATE MOVIE
			</Button>
		</Grid>
	);
}

export default UpdateMovie;
