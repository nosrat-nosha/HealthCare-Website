import React from "react";
import { Link } from "react-router-dom";
import Doctor from "../Doctors/Doctor";
import "./Footer.css";

const Footer = () => {
	return (
		<div>
			<section className="container-fluid footer-container mt-5 p-5 mx-auto footer-bg text-white">
				<div className="row container mx-auto">
					<div className="col-lg-3">
						<h4 className="footer-border mb-3">Services</h4>
						<p>Cancer</p>
						<p>Cardiac Arrhythmia</p>
						<p></p>
						<p>Kidney Disease</p>
						<p>Liver disease</p>
						<p>Otolaryngology</p>
						<p>Dental Care</p>
					</div>
					<div className="col-lg-3">
						<h4 className="footer-border mb-3">Department</h4>
						<p>Cardiologists</p>
						<p>Nephrologists</p>
						<p>Dermatologists</p>
						<p>Endocrinologists</p>
						<p>Gastroenterologists</p>
					</div>
					<div className="col-lg-3 ">
						<h4 className="footer-border mb-3">Link</h4>
						<p>
							<Link className="d-block" to="/home">
								Home
							</Link>
						</p>
						<p>
							<Link className="d-block" to="/about">
								About Us
							</Link>
						</p>
						<p>
							<Link className="d-block" to="/service">
								Services
							</Link>
						</p>
						<p>
							<Link className="d-block" to="/doctor">
								Doctors
							</Link>
						</p>
					</div>
					<div className="col-lg-3">
						<h4 className="footer-border mb-3">Opening Hour</h4>
						<table className="table">
							<tbody>
								<tr>
									<td colspan="2" className="text-white">
										{" "}
										MON-TUES
									</td>
									<td className="text-white">9.00AM-17.00PM</td>
								</tr>
								<tr>
									<td colspan="2" className="text-white">
										WEDNESDAY
									</td>
									<td className="text-white">9.00AM-17.00PM</td>
								</tr>
								<tr>
									<td colspan="2" className="text-white">
										THURSDAY
									</td>
									<td className="text-white">9.00AM-17.00PM</td>
								</tr>
								<tr>
									<td colspan="2" className="text-white">
										FRIDAY
									</td>
									<td className="text-white">9.00AM-17.00PM</td>
								</tr>
								<tr>
									<td colspan="2" className="text-white">
										SATURDAY
									</td>
									<td className="text-white">CLOSED</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-lg-12 mx-auto text-center">
						<h4>Follow us</h4>
						<p className="">
							<i className="fab fa-facebook-square  "></i>
							<i className="fab fa-youtube icon ms-2"></i>
							<i className="fab fa-instagram-square icon ms-2"></i>
							<i className="fab fa-linkedin-in icon ms-2"></i>
						</p>
						<p>
							Copyright &#9829; 2021 All RIgnts Reserved By Health Care Center
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Footer;
