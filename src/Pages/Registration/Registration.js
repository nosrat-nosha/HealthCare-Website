import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendEmailVerification,
	sendPasswordResetEmail,
} from "firebase/auth";

import initializeAuthentication from "../../Firebase/firebase.init";
initializeAuthentication();

const Registration = () => {
	//state declaration
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLogIn, setIsLogIn] = useState(false);

	//even handel for registration
	const handelToRegistration = (e) => {
		e.preventDefault();
		console.log("clicked");
		if (password.length < 6) {
			setError("password must be at least 6 characters long");

			return;
		}
		if (!email === email) {
			setError("wrong email");
		}
		isLogIn ? processLogIn(email, password) : createNewUser(email, password);
	};
	//even handel for Email
	const handelToEmail = (e) => {
		console.log(e.target.value);
		setEmail(e.target.value);
	};
	//even handel for password
	const handelToPassword = (e) => {
		console.log(e.target.value);
		setPassword(e.target.value);
	};
	//using firebase
	const auth = getAuth();

	//login process
	const processLogIn = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				// Signed in
				const user = result.user;
				console.log(user);
				// ...
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	//registration process
	const createNewUser = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				// Signed in
				const user = result.user;
				console.log(user);
				setError("");
				emailValidation();

				// ...
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	const emailValidation = () => {
		sendEmailVerification(auth.currentUser).then(() => {
			// Email verification sent!
			// ...
		});
	};

	return (
		<div className="pt-5 mt-5 shadow row col-lg-6 col-sm-12 mx-auto form-containe">
			<h2 className="text-center text-success">Registration</h2>
			<form className="p-5" onSubmit={handelToRegistration}>
				<div className="row mb-3">
					<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
						Email
					</label>
					<div className="col-sm-10">
						<input
							onBlur={handelToEmail}
							type="email"
							className="form-control"
							id="inputEmail3"
							placeholder=" Enter Your Email"
							required
						/>
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
						Password
					</label>
					<div className="col-sm-10">
						<input
							onBlur={handelToPassword}
							type="password"
							className="form-control"
							id="inputPassword3"
							placeholder=" Password"
							required
						/>
						<div className="text-danger">{error}</div>
						<button
							type="submit"
							className="btn btn-service w-25 mx-auto mt-5 text-white"
						>
							Sign in
						</button>
					</div>
				</div>

				<div className="row mb-3">
					<div className="col-sm-10 offset-sm-2">
						<div className="form-check">
							<label className="form-check-label" htmlFor="gridCheck1">
								Already Register? <Link to="login">login</Link>
							</label>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Registration;
