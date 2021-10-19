import React from "react";
import { useParams } from "react-router";

const Deails = () => {
	const { serviceKey } = useParams();
	return (
		<div>
			<div className="row mt-5">
				<div className="col-lg-4 text-center mx-auto">
					<h5 className="text-success  ">Ou Services= {serviceKey}</h5>
					<h2>Our Health Care Services</h2>
					<p className="text-secondary">
						Your health is our first priority. We always try to give you our
						best services
					</p>
				</div>
				<hr />
			</div>
		</div>
	);
};

export default Deails;
