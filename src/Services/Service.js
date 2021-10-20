import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Service = () => {
	// useState for services
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("/services.JSON")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<section>
			<div className="row mt-5">
				<div className="col-lg-4 text-center mx-auto">
					<h5 className="text-success  ">Our Services</h5>
					<h2>Our Health Care Services</h2>
					<p className="text-secondary ">
						Your health is our first priority. We always give best services to
						our clients.
					</p>
				</div>
				<hr />
			</div>
			<div className="container row row-cols-1 row-cols-md-3 gy-5 mx-auto mt-1">
				{services?.map((service) => (
					<div className="col">
						<div className="card shadow service-card h-100">
							<img
								src={service.img}
								className="card-img-top  mx-auto mt-3 w-25"
								alt="..."
							/>

							<div className="card-body mt-3">
								<h5 className="card-title text-success">{service.name}</h5>
								<p className="card-text">
									<h4>What is {service.name} ?</h4> <br />
									{service.description}
								</p>
							</div>
							<button className="btn w-50 btn-service  m-3">
								<Link className="button-service" to={`/service/${service.key}`}>
									Services
								</Link>
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Service;
