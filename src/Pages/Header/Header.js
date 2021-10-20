import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<div className="header-container">
				<div className="row">
					<div className="col-lg-6">
						<div className="banner-text p-5">
							<small className="text-success">Best Health Service</small>
							<h1>HOPEWELL HOSPITAL IS ONE OF THE BEST HOSPITAL IN THE TOWN</h1>
							<p className="fw-bold text-secondary">
								"The power of community to create health is far greater than any
								physician, clinic or hospital."
							</p>
						</div>
						<div class="input-group ms-5">
							<div class="form-outline">
								<input
									id="search-input"
									type="search"
									className="form-control w-100"
									placeholder="Search"
								/>
							</div>
							<button id="search-button" type="button" class="btn btn-search">
								<i class="fas fa-search text-white"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
