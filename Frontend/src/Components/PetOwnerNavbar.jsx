import { Link } from "react-router-dom";

export function PetOwnerNavbar() {
    return (
        <div>

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
                                <Link className="nav-link" to="/yourpet" style={{ textDecoration: "none", color: "black" }} >Your Pet</Link>
                            </li>

                            <li class="p-3 nav-item">
                                <Link className="nav-link" to="/bookappointment" style={{ textDecoration: "none", color: "black" }} >Booking Appointment</Link>
                            </li>


                            <li class="p-3 nav-item">
                                <Link className="nav-link" to="" style={{ textDecoration: "none", color: "black" }} >History</Link>
                            </li>

                            <li class="p-3 nav-item ">
                                <Link className="nav-link" to="/" style={{ textDecoration: "none", color: "black" }} >Sign Out</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    );
}