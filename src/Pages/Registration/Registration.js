import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendEmailVerification,
	sendPasswordResetEmail,
} from "firebase/auth";

import initializeAuthentication from "../../Firebase/firebase.init";
import { ToggleButton } from "react-bootstrap";
initializeAuthentication();

const Registration = () => {
	//state declaration
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLogIn, setIsLogIn] = useState(false);
	//use auth & google sign in
	const { signInWithGoogle, SignInWithEmail } = useAuth();
	const location = useLocation();
	console.log("came from", location.state?.from);
	const history = useHistory();
	const redirect_url = location.state?.from || "/home";

	const handelToGoogle = () => {
		signInWithGoogle().then((result) => {
			history.push(redirect_url);
		});
	};

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
	//for toggle
	const ToggleButton = (e) => {
		console.log(e.target.checked);
		setIsLogIn(e.target.checked);
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
	//registration & log in process
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
			<h2 className="text-center text-success">
				{isLogIn ? "LOG IN" : "SIGN UP"}
			</h2>
			<form className="p-5 " onSubmit={handelToRegistration}>
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
							className="btn btn-service  mx-auto mt-5  text-white"
						>
							{isLogIn ? "Log In" : "Sign Up"}
						</button>
					</div>
				</div>

				<div className="row mb-3">
					<div className="col-sm-10 offset-sm-2">
						<div className="form-check">
							<input
								onChange={ToggleButton}
								class="form-check-input"
								type="checkbox"
								id="gridCheck1"
							/>
							<label className="form-check-label" htmlFor="gridCheck1">
								Already Signed Up?
							</label>
						</div>
					</div>
				</div>
			</form>
			<button
				className="btn-service btn text-white fw-bold"
				onClick={handelToGoogle}
			>
				Log In With Google
			</button>
		</div>
	);
};

export default Registration;
