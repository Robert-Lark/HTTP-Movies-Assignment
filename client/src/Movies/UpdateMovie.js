import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Form from "react-basic-form";
import { makeStyles } from "@material-ui/core/styles";

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
    stars: []
}

function UpdateMovie(props) {

const [update, setUpdate] = useState(initialState)

const classes = useStyles();

const submit = (e) => {
    e.preventDefault();
   
    console.log(update)
	// axios
	// 	.post("http://localhost:5000/api/login", formValues)
	// 	.then((res) => {
	// 		localStorage.setItem("token", res.data.payload);
	// 		props.history.push("/protected");
	// 	})
	// 	.catch((err) => console.log("error: ", err));
};

const changeHandler = (e) => {
     setUpdate({ ...update, [e.target.name]: e.target.value })
    }

    return (
			<Grid container className={classes.updateForm}>
				<Form onSubmit={(data) => console.log(data)}>
					<Form.Element
						onChange={changeHandler}
						label="id"
						name="id"
						required
					/>
					<Form.Element
						onChange={changeHandler}
						label="title"
						name="title"
						type="email"
						required
					/>
					<Form.Element
						onChange={changeHandler}
						label="director"
						name="director"
						required
					/>
					<Form.Element
						label="metascore"
						name="metascore"
						type="email"
						onChange={changeHandler}
						required
					/>
					<h4>ACTORS</h4>
					<Form.Element
						onChange={changeHandler}
						label="stars"
						name="stars"
						type="text"
						required
					/>
					<Form.Element
						onChange={changeHandler}
						label="stars"
						name="stars"
						type="text"
						required
					/>
					<Form.Element
						label="stars"
						name="stars"
						type="text"
						onChange={changeHandler}
						required
					/>
				</Form>
				<Button
					onClick={submit}
					value="value"
					variant="contained"
				>
					UPDATE MOVIE
				</Button>
			</Grid>
		);


}

export default UpdateMovie;