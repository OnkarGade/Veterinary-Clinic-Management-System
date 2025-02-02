import { Link } from "react-router-dom";

export function AdminNavbar() {

    return <div className="container-fluid">

        <nav className="navbar navbar-expand-lg fixed-top navbar-scroll bg-body-tertiary border-bottom">
            <div className="container mt-6 fw-bolder fs-6">
                <img src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png" height="70" alt=""
                    loading="lazy" />
                <button className="navbar-toggler ps-0" type="button" data-mdb-collapse-init data-mdb-target="#navbarExample01"
                    aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon d-flex justify-content-start align-items-center"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarExample01">
                    <ul className="nav nav-underline ms-auto mb-2 mb-lg-0">

                        <li className="p-3 nav-item">
                            <Link className="nav-link default" to="" style={{ textDecoration: "none", color: "black" }}>Doctors</Link>
                        </li>

                        <li className="p-3 nav-item">
                            <Link className="nav-link" to="" style={{ textDecoration: "none", color: "black" }}>Receptionists    </Link>
                        </li>


                        <li className="p-3 nav-item">
                            <Link className="nav-link " to="/addstaff" style={{ textDecoration: "none", color: "black" }}>Add Staff</Link>
                        </li>

                        <li className="p-3 nav-item">
                            <Link className="nav-link" to="/" style={{ textDecoration: "none", color: "black" }} >Sign Out</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>


    </div>

}