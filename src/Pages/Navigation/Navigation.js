import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import logo from "../../images/image/logo.png";

import "./Navigation.css";

const Navigation = () => {
	const { user, logOut } = useAuth();
	return (
		<div>
			<Navbar bg="" className="Nav-bg" expand="lg">
				<Container>
					<Navbar.Brand to="/home" className="text-white fw-bold shadow-sm p-3">
						Hopewell Hospital
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto ">
							<Link className="nav-li text-white " to="/home">
								Home
							</Link>
							<Link className="nav-li text-white" to="/service">
								Service
							</Link>
							<Link className="nav-li text-white" to="/about">
								About Us
							</Link>
							<Link className="nav-li text-white" to="/doctor">
								Doctors
							</Link>
							<Link className="nav-li text-white" to="/registration">
								Registration
							</Link>
							{user.email ? (
								<Link className=" nav-li text-white" onClick={logOut}>
									log out
								</Link>
							) : (
								<Link className="nav-li text-white" to="/login">
									LogIn
								</Link>
							)}
						</Nav>
						<div className="">
							<Navbar.Text>
								<p className="text-white ">
									Signed in as: {user.displayName}
									<img className="email-img " src={user.photoURL} alt="" />
								</p>
							</Navbar.Text>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navigation;
