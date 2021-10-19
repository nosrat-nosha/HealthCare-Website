import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Doctor = () => {
	// useState for doctors
	const [doctors, setDoctors] = useState([]);
	// useState for doctors
	useEffect(() => {
		fetch("./doctors.JSON")
			.then((res) => res.json())
			.then((data) => setDoctors(data));
	}, []);
	return (
		<div>
			<section>
				<div className="row mt-5">
					<div className="col-lg-4 text-center mx-auto">
						<h5 className="text-success  ">Doctors</h5>
						<h2>Meet Our Qualified Specialist</h2>
					</div>
					<hr />
				</div>
				<div className="container row row-cols-1 row-cols-md-3 gy-5 mx-auto mt-3">
					{doctors?.map((doctor) => (
						<div className="col">
							<div className="card card-bg  h-100">
								<img
									src={doctor.img}
									className="card-img-top rounded-circle w-75 mt-3 mx-auto card-img"
									alt="..."
								/>
								<div className="card-body ">
									<h5 className="card-title text-center">{doctor.name}</h5>
									<h5 className="card-title text-center text-success">
										{doctor.department}
									</h5>
									<p className=" text-center">Salary: $ {doctor.salary}</p>
									<h5>
										What is {doctor.department} ? <br />
									</h5>
									<p className="card-text ">{doctor.description}</p>
									<button className="btn w-50 btn-service   m-3">
										<Link className="button-service" to="/home">
											{" "}
											SEE MORE <i class="fas fa-arrow-right ms-2"></i>
										</Link>{" "}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Doctor;
