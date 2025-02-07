// import { Link } from "react-router-dom";
// import { DocNavbar } from "../Components/DocNavbar";
import { useEffect, useState } from "react";
// import { GetTodaysAppointments } from "../Services/GetServices";
import { toast } from "react-toastify";
import { DocNavbar } from "../../Components/DocNavbar";
import { GetTodaysAppointments } from "../../Services/GetServices";

export function CompletedAppointments() {

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [petHistory, setPetHistory] = useState([])

    const getTodaysAppoints = async () => {
        setLoading(true); // Start loading

        try {
            var response = await GetTodaysAppointments()

            console.log(response)

            if (response?.data) {
                setAppointments(response.data)
            } else {
                toast.info("No Appointments Today.");
            }
        } catch (err) {
            console.error("Error fetching Appointments :", err);
            // toast.error("Failed to load Appointments.");
        } finally {
            setLoading(false); // End loading
        }

    }


    // Fetch data from backend using Axios
    useEffect(() => {

        getTodaysAppoints();

    }, []);


    return (
        <div className="container-fluid">
            <DocNavbar />


            <div className="container" style={{ marginTop: "110px" }}>
                <div className="mt-2" style={{ textAlign: "center" }}><span className="fw-bolder fs-3">Completed Appointments</span></div>
                {/* <div className="text-center mt-4"><span className="fw-bolder fs-3">Today's Appointments</span></div> */}

                <div className="mt-3">
                    {loading ? (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-hover table-bordered shadow-sm">
                                {/* The "shadow-lg" class will add a large shadow to the table */}
                                <thead className="table-primary">
                                    <tr>
                                        <th >No.</th>
                                        {/* <th>Owner Id</th> */}
                                        <th >Owner Email</th>
                                        <th >Pet Breed</th>
                                        <th>Pet History</th>
                                        <th>Attend</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {appointments.length !== 0 ? (
                                        appointments.map((appointment, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{appointment.owner?.owner?.email}</td>
                                                <td>{appointment.appointDate}</td>
                                                <td>{appointment.appointTime}</td>
                                                <td>{appointment.illness || "Not Mentioned"}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="text-center">
                                                No Pending Requests
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div> 

            </div>

        </div>
    );
}