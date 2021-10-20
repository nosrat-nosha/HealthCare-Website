// import React from "react";

// import { Link, useLocation, useHistory } from "react-router-dom";
// import useAuth from "../../hook/useAuth";
// import "./LogIn.css";

// const LogIn = () => {
// 	const { signInWithGoogle, SignInWithEmail } = useAuth();
// 	const location = useLocation();
// 	console.log("came from", location.state?.from);
// 	const history = useHistory();
// 	const redirect_url = location.state?.from || "/home";

// 	const handelToGoogle = () => {
// 		signInWithGoogle().then((result) => {
// 			history.push(redirect_url);
// 		});
// 	};

// 	return (
// 		<div className="pt-5 mt-5 shadow row col-lg-6 col-sm-12 mx-auto form-container">
// 			<h2 className="col-lg-4 mx-auto text-success">Please Log In</h2>
// 			<hr />

// 			<form>
// 				<div className="row p-2  mb-3">
// 					<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
// 						Email
// 					</label>
// 					<div className="col-sm-10">
// 						<input
// 							onBlur=""
// 							type="email"
// 							className="form-control"
// 							id="inputEmail3"
// 							placeholder="Enter Your Email"
// 							required
// 						/>
// 					</div>
// 				</div>
// 				<div className="row p-2 mb-3">
// 					<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
// 						Password
// 					</label>
// 					<div className="col-sm-10">
// 						<input
// 							onBlur=""
// 							type="password"
// 							className="form-control"
// 							id="inputPassword3"
// 							placeholder=" Password"
// 							required
// 						/>
// 					</div>
// 					<button
// 						className="btn btn-service w-25 mx-auto mt-5 text-white "
// 						onClick={SignInWithEmail}
// 					>
// 						Log In
// 					</button>{" "}
// 				</div>

// 				{/* ------ */}
// 				<br />
// 				<p>
// 					New user?
// 					<Link to="/registration">Please register</Link>
// 				</p>
// 			</form>
// 			<button className="btn-service btn text-white" onClick={handelToGoogle}>
// 				Google log in
// 			</button>
// 		</div>
// 	);
// };

// export default LogIn;
