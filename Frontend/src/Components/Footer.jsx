import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: " #1c2331", marginTop:"50px" }}
        >
            <section
                className="d-flex justify-content-between p-4"
                style={{ backgroundColor: " #4A90E2" }}
            >
                <div className="me-5">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <Link to="" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </Link>
                    <Link to="" className="text-white me-4">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="" className="text-white me-4">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link to="" className="text-white me-4">
                        <i className="fab fa-github"></i>
                    </Link>
                </div>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Veterinary Clinic</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p>
                            A pet clinic is a healthcare facility for pets, offering services like check-ups, vaccinations, treatments, and surgeries. 
                            Staffed by veterinarians, it ensures pets' health and well-being.
                            </p>
                        </div>
                        {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Products</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p>
                                <Link to="#!" className="text-white">MDBootstrap</Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-white">MDWordPress</Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-white">BrandFlow</Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-white">Bootstrap Angular</Link>
                            </p>
                        </div> */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Useful links</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p>
                                <Link to="/petowner-profile" className="text-white">Your Account</Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-white">About Us</Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-white">Help</Link>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p><i className="fas fa-home mr-3"></i> Hinjewadi, Pune 10012, India</p>
                            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
