import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
	return (
		<div>
			<div className="row mt-5">
				<div className="col-lg-4 title-design  text-center mx-auto">
					<h2 className="text-white">404</h2>
					<h5 className="text-success  ">
						Want to go home page?
						<Link className="text-success " to="/home">
							Home
						</Link>
					</h5>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
