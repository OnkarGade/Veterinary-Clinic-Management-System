import { useEffect, useState } from "react";
import { ReceptionistNavbar } from "../Components/ReceptionistNavbar";
import { GetAllPendingRequests } from "../Services/GetServices";
import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { setBills } from "../Features/Receptionist/BillingData";
import { ApproveAppointment } from "../Services/ReceptionistService";
import { DenyAppointment } from "../Services/DeleteService";
// import Footer from "../Components/Footer";

export function Receptionist() {
    const [pendingRequests, setPendingRequests] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    // const dispatch = useDispatch();

    // Fetch all pending appointments
    const getAllPendingAppointments = async () => {
        setLoading(true); // Start loading
        try {
            const res = await GetAllPendingRequests();
            console.log(res)
            if (res?.data) {
                setPendingRequests(res.data);
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

    // Handle appointment approval
    const handleApprove = async (appointmentId) => {

        console.log(appointmentId)

        await ApproveAppointment(appointmentId)
            .then(res => {
                if (res?.status) {
                    toast.success(`Appointment Approved`); // Temporary success message
                } else {
                    console.log(res)
                }
            }).catch(err => {
                console.log(err)
            })

        getAllPendingAppointments(); // Refresh list
    };

    // Handle appointment denial
    const handleDeny = async (appointmentId) => {

        var response = await DenyAppointment(appointmentId)

        if (response?.status && response.status === 200) {
            toast.success(`Appointment Denied`); // Temporary success message
        }
        
        getAllPendingAppointments(); // Refresh list
    };

    // Fetch appointments when the component mounts
    useEffect(() => {
        getAllPendingAppointments();
        // fetchPendingBills();
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
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pendingRequests.length !== 0 ? (
                                    pendingRequests.map((request, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{request.owner?.owner?.email}</td>
                                            <td>{request.appointDate}</td>
                                            <td>{request.appointTime}</td>
                                            <td>{request.illness || "Not Mentioned"}</td>
                                            <td style={{ display: "none" }}>{request.id}</td>
                                            <td>
                                                <button
                                                    className="btn btn-success btn-sm me-2"
                                                    onClick={() => handleApprove(request.id)}
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Approve Appointment"
                                                >
                                                    <i className="fas fa-check"></i>
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleDeny(request.id)}
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Deny Appointment"
                                                >
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </td>
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
            {/* <Footer /> */}
        </div>
    );
}
