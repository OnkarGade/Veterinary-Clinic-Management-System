import { useState } from "react";
import { Link } from "react-router-dom";

export function DocNavbar() {

    const [message, setMessage] = useState(' ')



    return <div>

        <nav class="navbar navbar-expand-lg fixed-top navbar-scroll bg-body-tertiary border-bottom">
            <div class="container mt-6 fw-bolder fs-6">
                <img src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png" height="70" alt=""
                    loading="lazy" />
                <button class="navbar-toggler ps-0" type="button" data-mdb-collapse-init data-mdb-target="#navbarExample01"
                    aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon d-flex justify-content-start align-items-center"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarExample01">
                    <ul class="nav nav-underline ms-auto mb-2 mb-lg-0">

                        <li class="p-3 nav-item">
                            <Link className="nav-link" to="/doctor" style={{ textDecoration: "none", color: "black" }}>Today's Appointment</Link>
                        </li>

                        <li class="p-3 nav-item">
                            <Link className="nav-link" to="/pendingappointment" style={{ textDecoration: "none", color: "black" }}>Pending Appointments</Link>
                        </li>

                        <li class="p-3 nav-item">
                            <Link className="nav-link" to="/completedappointment" style={{ textDecoration: "none", color: "black" }}>Completed Appointments</Link>
                        </li>
                        <li class="p-3 nav-item">
                            <Link className="nav-link" to="/pethistory" style={{ textDecoration: "none", color: "black" }} >Pet History</Link>
                        </li>

                        <li class="p-3 nav-item" onMouseEnter={() => setMessage("Profile")}
                            onMouseLeave={() => setMessage(" ")}>
                            <Link className="nav-link" to="/pethistory" style={{ textDecoration: "none", color: "black" }} >
                                <i class="fa-solid fa-user"></i>
                            </Link>
                            {message && (
                                <div
                                    style={{
                                        background: "#333",
                                        color: "white",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        fontSize: "12px",
                                        marginTop: "5px", // Spacing below icon
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {message}
                                </div>
                            )}

                        </li>

                        <li class="p-3 nav-item">
                            <Link className="nav-link" to="/" style={{ textDecoration: "none", color: "black" }} >Sign Out</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>





    </div>

}