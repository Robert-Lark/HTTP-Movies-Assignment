import React, { useState } from "react";
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

function AddMovie(props) {
	const [add, setAdd] = useState(initialState);
	const { push } = useHistory();
	const { id } = useParams();

	const classes = useStyles();

	const submit = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:5000/api/movies/`, add)
			.then((res) => {
				props.setMovieList(res.data);
				push("/movies");
			})
			.catch((err) => console.log("error: ", err));
	};

	const changeHandler = (e) => {
        const value =
            e.target.name === 'stars' ? [e.target.value] : e.target.value;
        setAdd({ ...add, [e.target.name]: value });
        console.log(add)
	};

	return (
		<Grid container className={classes.updateForm}>
			<Form onSubmit={(data) => console.log(data)}>
				<Form.Element
					onChange={changeHandler}
					label="id"
					name="id"
					value={add.id || ""}
					required
				/>
				<Form.Element
					onChange={changeHandler}
					label="title"
					name="title"
					type="email"
					value={add.title || ""}
					required
				/>
				<Form.Element
					onChange={changeHandler}
					label="director"
					value={add.director || ""}
					name="director"
					required
				/>
				<Form.Element
					label="metascore"
					name="metascore"
					value={add.metascore || ""}
					type="metascore"
					onChange={changeHandler}
					required
				/>
				<h4>ACTORS</h4>
				<Form.Element
					onChange={changeHandler}
					label="stars"
					value={add.stars || ""}
					name="stars"
					type="text"
					required
				/>
			</Form>
			<Button onClick={submit} value="value" variant="contained">
				ADD MOVIE
			</Button>
		</Grid>
	);
}

export default AddMovie;
