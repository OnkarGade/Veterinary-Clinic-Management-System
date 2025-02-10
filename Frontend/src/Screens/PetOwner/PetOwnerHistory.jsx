import { useEffect, useState } from "react";
import { PetOwnerNavbar } from "../../Components/PetOwnerNavbar";
import { GetCompletedAppointments } from "../../Services/GetServices";
// import { Spinner } from "react-bootstrap";  // For loading spinner

export function PetOwnerHistory() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true); // For loading state

    useEffect(() => {
        const getAllCompletedAppointments = async () => {
            setLoading(true); // Start loading
            await GetCompletedAppointments()
                .then(res => {
                    setAppointments(res.data);
                    setLoading(false); // Stop loading when data is fetched
                })
                .catch(err => {
                    console.log('Error Getting Data' + err);
                    setLoading(false); // Stop loading even in case of an error
                });
        };

        getAllCompletedAppointments();
    }, []);

    return (
        <div className='container-fluid' style={{ marginTop: "120px" }}>
            <PetOwnerNavbar />

            <div className="container mt-4">
                <div className="text-center mb-4">
                    <span className="fw-bolder fs-3">Your Appointment History</span>
                </div>

                <div className="table-responsive">
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
                            {/* <Spinner animation="border" variant="primary" /> */}
                        </div>
                    ) : (
                        <table className="table table-hover table-bordered shadow-sm">
                            <thead className="table-primary">
                                <tr>
                                    <th>No.</th>
                                    <th>Appointment Date</th>
                                    <th>Appointment Time</th>
                                    <th>Pet Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.length !== 0
                                    ? appointments.map((appointment, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{appointment.appointDate}</td>
                                            <td>{appointment.appointTime}</td>
                                            <td>{appointment.pet.name}</td>
                                            <td>{appointment.status}</td>
                                        </tr>
                                    ))
                                    : <tr>
                                        <td colSpan={5} className="text-center">
                                            <div>No History Found</div>
                                            <div className="text-muted">You haven't had any completed appointments yet.</div>
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
