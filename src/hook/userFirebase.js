import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
	const GoogleProvider = new GoogleAuthProvider();

	const auth = getAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	//sign in with email & password
	const SignInWithEmail = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				// Signed in
				const user = result.user;
				console.log(user);
				setEmail(user);
				// ...
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	//sign in with google
	const signInWithGoogle = () => {
		return signInWithPopup(auth, GoogleProvider);
	};
	//logout
	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {});
	};
	//useEffect set
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log("state change", user);
				setUser(user);
			} else {
			}
		});
	}, []);
	//return function
	return {
		user,
		error,
		signInWithGoogle,
		logOut,
		SignInWithEmail,
	};
};
export default useFirebase;
