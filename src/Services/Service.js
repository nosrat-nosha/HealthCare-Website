import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Service = () => {
	// useState for services
	const [services, setServices] = useState([]);
	// useState for services
	useEffect(() => {
		fetch("/services.JSON")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	const { serviceKey } = useParams();
	return (
		<div>
			<section>
				<div className="row mt-5">
					<div className="col-lg-4 text-center mx-auto">
						<h5 className="text-success  ">Our Services ={serviceKey}</h5>
						<h2>Our Health Care Services</h2>
						<p className="text-secondary">
							Your health is our first priority. We always try to give you our
							best services
						</p>
					</div>
					<hr />
				</div>
				<div className="container row row-cols-1 row-cols-md-1 gy-5 mx-auto mt-1">
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
									<Link className="button-service" to="/home">
										{" "}
										SEE MORE <i class="fas fa-arrow-right ms-2"></i>
									</Link>{" "}
								</button>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Service;
