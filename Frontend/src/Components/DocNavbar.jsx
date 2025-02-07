import { Link } from "react-router-dom";
import { useState } from "react";

export function DocNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const clearSession = () => {
        sessionStorage.clear();
        console.log("Session Cleared");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className="navbar fixed-top"
            style={{
                backgroundColor: "#4A90E2",
                height: "70px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
        >
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Navbar Brand */}
                <span className="navbar-brand text-white fw-bold fs-4">
                    Doctor Panel
                </span>

                {/* Hamburger Menu Button for Small Screens */}
                <button
                    className="btn text-white d-lg-none"
                    onClick={toggleMenu}
                    style={{
                        fontSize: "24px",
                        border: "none",
                        background: "none",
                    }}
                >
                    <i className="fas fa-bars"></i>
                </button>

                {/* Navbar Links (Desktop) */}
                <ul className="navbar-nav d-none d-lg-flex flex-row gap-3">
                    <li className="nav-item">
                        <Link to="/doctor" className="nav-link text-white">
                            <i className="fas fa-tasks me-2"></i>Today's Appointment
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/pendingappointment" className="nav-link text-white">
                            <i className="fas fa-calendar-alt me-2"></i>Pending Appointments
                        </Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link to="/completedappointment" className="nav-link text-white">
                            <i className="fas fa-check-circle me-2"></i>Completed Appointments
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pethistory" className="nav-link text-white">
                            <i className="fas fa-paw me-2"></i>Pet History
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/doctor-profile" className="nav-link text-white">
                            <i className="fas fa-user-circle me-2"></i>Profile
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-link text-white"
                            onClick={clearSession}
                        >
                            <i className="fas fa-sign-out-alt me-2"></i>Sign Out
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Slide-In Navbar (Mobile) */}
            <div
                className={`slide-menu ${isMenuOpen ? "open" : ""}`}
                style={{
                    position: "fixed",
                    top: "0",
                    right: "0",
                    height: "100vh",
                    width: "250px",
                    backgroundColor: "#4A90E2",
                    boxShadow: "-4px 0 6px rgba(0, 0, 0, 0.1)",
                    transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.3s ease",
                    zIndex: "1050",
                }}
            >
                <button
                    className="btn text-white"
                    onClick={toggleMenu}
                    style={{
                        fontSize: "24px",
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        background: "none",
                        border: "none",
                    }}
                >
                    <i className="fas fa-times"></i>
                </button>
                <ul className="navbar-nav mt-5 px-3">
                    <li className="nav-item">
                        <Link
                            to="/doctor"
                            className="nav-link text-white"
                            onClick={toggleMenu}
                        >
                            <i className="fas fa-tasks me-2"></i>Today's Appointment
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link
                            to="/pendingappointment"
                            className="nav-link text-white"
                            onClick={toggleMenu}
                        >
                            <i className="fas fa-calendar-alt me-2"></i>Pending Appointments
                        </Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link
                            to="/completedappointment"
                            className="nav-link text-white"
                            onClick={toggleMenu}
                        >
                            <i className="fas fa-check-circle me-2"></i>Completed Appointments
                        </Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link
                            to="/pethistory"
                            className="nav-link text-white"
                            onClick={toggleMenu}
                        >
                            <i className="fas fa-paw me-2"></i>Pet History
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link
                            to="/doctor-profile"
                            className="nav-link text-white"
                            onClick={toggleMenu}
                        >
                            <i className="fas fa-user-circle me-2"></i>Profile
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-link text-white"
                            onClick={() => {
                                clearSession();
                                toggleMenu();
                            }}
                        >
                            <i className="fas fa-sign-out-alt me-2"></i>Sign Out
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
