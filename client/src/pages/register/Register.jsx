import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";
import axios from 'axios'

const Register = () => {

	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		password: "",

	})

	const handleChange = (e) => {
		setInputs((prev) => ({...prev,[e.target.name]: e.target.value}))
	}
	const [err, setErr] = useState(null);

	const handleClick = async (e) => {
		e.preventDefault();

		try {
			await axios.post("http://localhost:8800/api/auth/register", inputs, {
				headers: {
					'Content-Type': 'application/json'
				}
			});
		} catch (err) {
			setErr(err.response?.data || "An unknown error occurred");
		}
	};

	console.log(err)

	console.log(err)

	return (

		<div className="register">
			<div className="card">
				<div className="right">
					<h1>Register</h1>
					<form>
						<input type="text" placeholder="Username" name="name" onChange={handleChange}></input>
						<input type="email" placeholder="Email" name="email" onChange={handleChange}></input>
						<input type="password" placeholder="Password" name="password" onChange={handleChange}></input>
						<button onClick={handleClick}>Register</button>

					</form>
				</div>
			</div>
		</div>


	)


}
export default Register