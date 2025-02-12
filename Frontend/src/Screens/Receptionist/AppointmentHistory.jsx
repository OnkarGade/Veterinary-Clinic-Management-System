import { useEffect, useState } from "react";
import { ReceptionistNavbar } from "../../Components/ReceptionistNavbar";
import { toast } from "react-toastify";
import { GetAllAppointments } from "../../Services/GetServices";
// import { GetPendingBills } from "../../Services/GetServices"; // Uncomment and import your service to fetch pending bills

export function AppointmentHistory() {

    const [loading, setLoading] = useState(true); // Loading state

    const [appointments, setAppointments] = useState([])

    const getAllAppointments = async () => {
        setLoading(true); // Start loading
        try {
            const res = await GetAllAppointments();
            //(?.) shorthand syntax checks is res is not undefine or null before access data from res.data 
            if (res?.data) {
                console.log(res)
                setAppointments(res.data);
            } else {
                toast.info("No pending requests found.");
            }
        } catch (err) {
            console.error("Error fetching pending requests:", err);
            toast.error("Failed to load pending requests.");
        } finally {
            setLoading(false); // End loading
        }
    };

    useEffect(() => {
        getAllAppointments();
    }, []);

    return (
        <div className="container-fluid" style={{ marginTop: "120px" }}>
            <ReceptionistNavbar />
            <div className="container mt-5">
                {loading ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="table-responsive text-center">
                        <table className="table table-hover table-bordered shadow-sm">
                            {/* The "shadow-lg" class will add a large shadow to the table */}
                            <thead className="table-primary">
                                <tr>
                                    <th>No.</th>
                                    <th>Owner Email</th>
                                    <th>Appointment Date</th>
                                    <th>Appointment Time</th>
                                    <th>Illness</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.length !== 0 ? (
                                    appointments.filter(appointment => appointment.status !== 'PENDING').map((appointment, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{appointment.owner?.owner?.email}</td>
                                            <td>{appointment.appointDate}</td>
                                            <td>{appointment.appointTime}</td>
                                            <td>{appointment.illness || "Not Mentioned"}</td>
                                        </tr>))

                                ) : (
                                    <tr>
                                        <td colSpan={6} className="text-center">
                                            No Pending Requests
                                        </td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan={5} className="text-center">
                                    <div>No More Data Found</div>
                                    {/* <div className="text-muted">You haven't had any completed appointments yet.</div> */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
