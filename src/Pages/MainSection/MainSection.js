import React, { useEffect, useState } from "react";
import "./MainSection.css";
import img1 from "../../images/image/img3.jpg";
import check_mark from "../../images/image/check-mark.png";
import card from "../../images/image/img5.jpg";
import image1 from "../../images/image/img5.jpg";
import image2 from "../../images/image/img6.jpg";
import image3 from "../../images/image/img4.jpg";
import { Link } from "react-router-dom";

const MainSection = () => {
	// useState for doctors
	const [doctors, setDoctors] = useState([]);
	// useState for services
	const [services, setServices] = useState([]);
	// useState for doctors
	useEffect(() => {
		fetch("./doctors.JSON")
			.then((res) => res.json())
			.then((data) => setDoctors(data));
	}, []);
	// useState for services
	useEffect(() => {
		fetch("./services.JSON")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<div>
			{/* section 1 */}
			<section>
				<div className="mb-5">
					<div className="container-fluid mt-3">
						<div className="row">
							<div className="col-lg-7 shadow">
								<div
									id="carouselExampleCaptions"
									className="carousel slide"
									data-bs-ride="carousel"
								>
									<div className="carousel-indicators">
										<button
											type="button"
											data-bs-target="#carouselExampleCaptions"
											data-bs-slide-to="0"
											className="active"
											aria-current="true"
											aria-label="Slide 1"
										></button>
										<button
											type="button"
											data-bs-target="#carouselExampleCaptions"
											data-bs-slide-to="1"
											aria-label="Slide 2"
										></button>
										<button
											type="button"
											data-bs-target="#carouselExampleCaptions"
											data-bs-slide-to="2"
											aria-label="Slide 3"
										></button>
									</div>
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img
												src={image2}
												className="d-block w-100 mx-auto"
												alt="..."
											/>
										</div>
										<div className="carousel-item">
											<img src={image1} className="d-block w-100" alt="..." />
										</div>
										<div className="carousel-item">
											<img src={image3} className="d-block w-100" alt="..." />
										</div>
									</div>
									<button
										className="carousel-control-prev"
										type="button"
										data-bs-target="#carouselExampleCaptions"
										data-bs-slide="prev"
									>
										<span
											className="carousel-control-prev-icon"
											aria-hidden="true"
										></span>
										<span className="visually-hidden">Previous</span>
									</button>
									<button
										className="carousel-control-next"
										type="button"
										data-bs-target="#carouselExampleCaptions"
										data-bs-slide="next"
									>
										<span
											className="carousel-control-next-icon"
											aria-hidden="true"
										></span>
										<span className="visually-hidden">Next</span>
									</button>
								</div>
							</div>
							<div className="col-lg-5 col-sm-12 p-5 aboutUs-left">
								<h5 className="text-success">About US</h5>
								<h2>Short List Of Our Services </h2>
								<p>
									We Always try to provide our clients best services.In our
									Hospital every doctor is very qualified . Our Clinic is very
									neat and clean
								</p>
								<div className="">
									<div className="py-2">
										<img className="check-mark" src={check_mark} alt="" />
										Scientific Skills For getting a better result
										<br />
									</div>
									<div className="py-2">
										<img className="check-mark" src={check_mark} alt="" />{" "}
										Communication Skills to getting in touch
										<br />
									</div>
									<div className="py-2">
										<img className="check-mark" src={check_mark} alt="" />A
										Career Overview opportunity Available
										<br />
									</div>
									<div className="py-2">
										<img className="check-mark" src={check_mark} alt="" />A good
										Work Environment For work
									</div>
									<button className="btn w-25 btn-service  m-3">
										<Link className="button-service" to="/service">
											{" "}
											Services
										</Link>{" "}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* section-1 End  
  --------------------------------------------------------------------------------------------------------------------*}  
  	{/* section-2 Start  */}
			<section>
				<div className="row mt-5">
					<div className="col-lg-4 text-center mx-auto">
						<h5 className="text-success  ">Our Services</h5>
						<h2>Our Health Care Services</h2>
						<p className="text-secondary ">
							Your health is our first priority. We always try to give you our
							best services
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
									<Link
										className="button-service"
										to={`/deails/${service.key}`}
									>
										Details
									</Link>
								</button>
							</div>
						</div>
					))}
				</div>
			</section>
			<hr />
			{/* section-2 End  
  -------------------------------------------------------------------------------------------------------------------- */}
			{/* section-3 Start  */}
			<section>
				<div className="row  mt-5">
					<div className="col-lg-4 text-center mx-auto">
						<h5 className="text-success  ">Doctors</h5>
						<h2>Meet Our Qualified Specialist</h2>
					</div>
				</div>
				<div className="container row row-cols-1 row-cols-md-4 gy-5 mx-auto mt-3">
					{doctors?.map((doctor) => (
						<div className="col ">
							<div className="card shadow card-bg h-100">
								<img
									src={doctor.img}
									className="card-img-top rounded-circle w-75 mx-auto mt-3 card-img"
									alt="..."
								/>
								<div className="card-body ">
									<h5 className="card-title text-center">{doctor.name}</h5>
									<h5 className="card-title text-center text-success">
										{doctor.department}
									</h5>
									<p className="card-text text-center ">
										Gender: {doctor.gender}
										<br />
										<button className="btn w-50 btn-service text-center  m-3">
											<Link className="button-service" to="/doctor">
												SEE MORE
											</Link>
										</button>
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<hr />
			</section>
			{/* section-3 End  
  -------------------------------------------------------------------------------------------------------------------- */}
			{/* section 4 Start  */}
			<section className="mt-5">
				<div className="row mt-5">
					<div className="col-lg-4 title-design  text-center mx-auto">
						<h5 className="text-success  ">Ask Questions</h5>
						<h2 className="text-white">Frequently Asked Questions</h2>
					</div>
				</div>
				<div className="row section-3 mt-5 ">
					<div className="col-lg-6">
						<div className="card bg-dark  text-success">
							<img src={card} className="card-img" alt="..." />
						</div>
					</div>
					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-12 ">
								{/* <h5 className="text-success">Frequently Asked Questions</h5> */}
								<h2 className="fs-1">
									Get Every Single Answers There if you want
								</h2>
							</div>
						</div>
						<div className="accordion mt-5" id="accordionExample">
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingOne">
									<button
										className="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne"
									>
										What kind of doctor do i need?
									</button>
								</h2>
								<div
									id="collapseOne"
									className="accordion-collapse collapse show"
									aria-labelledby="headingOne"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										Some health insurance plans allow you to refer yourself to a
										doctor—that is, if you know what is wrong, you can go see a
										medical specialist without having to be referred by your
										regular doctor.
									</div>
								</div>
							</div>

							<div className="accordion-item">
								<h2 className="accordion-header" id="headingThree">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseThree"
										aria-expanded="false"
										aria-controls="collapseThree"
									>
										What is a faculty physician?
									</button>
								</h2>
								<div
									id="collapseThree"
									className="accordion-collapse collapse"
									aria-labelledby="headingThree"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										employed faculty member (a doctor of medicine or doctor of
										philosophy for this discussion) from summary (i.e., without
										cause) dismissal, and is granted after a trial period during
										which the doctor has per- formed at a level commensurate
										with the standards established by his or her university.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingThree">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseThree"
										aria-expanded="false"
										aria-controls="collapseThree"
									>
										How do I know which doctor to consult?
									</button>
								</h2>
								<div
									id="collapseThree"
									className="accordion-collapse collapse"
									aria-labelledby="headingThree"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										Your doctors want you to understand your health care
										options. Make sure all of your doctors know your health
										history. Bring a list of medications you are taking each
										time you visit a new doctor. Remember that it may take more
										than one specialist to treat complex medical conditions
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* section-4 End  
  -------------------------------------------------------------------------------------------------------------------- */}
		</div>
	);
};

export default MainSection;
