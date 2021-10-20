import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

const Deails = () => {
	const [services, setServices] = useState([]);
	const { serviceKey } = useParams();
	useEffect(() => {
		fetch("/services.JSON")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	const selected = services.find((service) => service.key === serviceKey);

	return (
		<div className="row">
			{/* <h1>{ selected?.name }</h1> */}

			<Card className=" col-lg-8 col-sm-4 mx-auto mt-5 shadow">
				<Card.Img
					variant="top"
					className="w-25 mx-auto mt-3"
					src={selected?.img}
				/>
				<Card.Body>
					<Card.Title className="text-secondary fw-bold">
						{selected?.name}
					</Card.Title>
					<Card.Text>
						<br />
						<h4 className="text-success">What is {selected?.name}?</h4>{" "}
						{selected?.description}
					</Card.Text>
					<Card.Text>
						<h4 className="text-success">What is the solution ? </h4>{" "}
						{selected?.solution}
					</Card.Text>
					<Card.Text>
						<h4 className="text-success d-inline">Death ratio : </h4>{" "}
						{selected?.death_ratio}
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Deails;
