import React from "react";
import { Link } from "react-router-dom";
import check_mark from "../../images/image/check-mark.png";
import img1 from "../../images/image/img3.jpg";
import "./About.css";

const About = () => {
	return (
		<div>
			<section>
				<div className="container-fluid about-container">
					<div className="row">
						<div className="col-lg-8">
							<div className="banner-text p-5">
								<h4>
									The power of community to create health is far greater than
									any physician, clinic or hospital.
								</h4>
								<small className=" fw-bold">-Mark Hyman</small>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="">
					<div className="container-fluid mt-3">
						<div className="row">
							<div className="col-lg-6 col-sm-12 p-5 aboutUs-left">
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
									<button className="btn w-50 btn-service  m-3">
										<Link className="button-service" to="/home">
											{" "}
											SEE MORE <i class="fas fa-arrow-right ms-2"></i>
										</Link>{" "}
									</button>
								</div>
							</div>
							<div className="col-lg-6 col-sm-12">
								<img className="img-fluid" src={img1} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
