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
		<div className="">
			{/* <h1>{ selected?.name }</h1> */}
			<Card className="mx-auto mt-5" style={{ width: "18rem" }}>
				<Card.Img variant="top" src={selected?.img} />
				<Card.Body>
					<Card.Title>{selected?.name}</Card.Title>
					<Card.Text>
						{" "}
						<h5 className="text-primary">
							What is {selected?.name}?
						</h5> <br /> {selected?.description}
					</Card.Text>
					<Card.Text>Solution :{selected?.solution}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Deails;
