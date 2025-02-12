// Import necessary components and libraries
import { DocNavbar } from "../Components/DocNavbar";
import { useEffect, useState } from "react";
import { GetFutureAppointments, GetPetPrescription, GetTodaysAppointments } from "../Services/GetServices";
import { toast } from "react-toastify";
import { AddPrescription } from "../Services/DoctorServices";

export function Doctor() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [petHistory, setPetHistory] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [current, setCurrent] = useState(new Date())
    const [prescriptionDetails, setPrescriptionDetails] = useState({
        aptId: 0,
        diagnosis: '',
        prescriptionAdvice: ''
    })

    const handleChange = (event) => {

        const { name, value } = event.target;

        setPrescriptionDetails((prev) => ({ ...prev, [name]: value }))

    }

    const getTodaysAppoints = async () => {
        setLoading(true);
        try {
            const response = await GetTodaysAppointments();
            if (response?.data) {
                setAppointments(response.data);
                // console.log(response.data)
                // setPetHistory(response.data)
            } else {
                toast.info("No Appointments Today.");
            }
        } catch (err) {
            console.error("Error fetching appointments:", err);
        } finally {
            setLoading(false);
        }
        // var todaysDate = current.split()

        // console.log(current)
    };

    const getUpcomingAppointments = async () => {
        try {
            const response = await GetFutureAppointments();
            console.log(response)
            if (response?.data) {
                setUpcoming(response.data);
            } else {
                console.log("No upcoming appointments found.");
            }
        } catch (err) {
            console.error("Error fetching upcoming appointments:", err);
        }
    };

    const openPetHistoryModal = async (petId) => {

        var response = await GetPetPrescription(petId)

        console.log(response.data)

        setPetHistory(response.data)

        const modal = new window.bootstrap.Modal(document.getElementById("staticBackdrop"));
        modal.show();



    };

    const openAttendModal = (appointmentId) => {

        // handleChange({ name: 'aptId', value: appointmentId })

        setPrescriptionDetails({
            aptId: appointmentId,
            diagnosis: '',
            prescriptionAdvice: ''
        })

        const modal = new window.bootstrap.Modal(document.getElementById("exampleModal"));
        modal.show();
        console.log('Attend close');
    };

    const submitPrescription = async () => {

        await AddPrescription(prescriptionDetails)
            .then(res => {
                if (res?.status) {
                    if (res.status) {
                        toast.success('Prescription Added')
                    } else {
                        toast.info('Something Went Wrong')
                    }
                }
            }).catch(err => {
                console.log('Error : ' + err)
            })

        getTodaysAppoints();

    }

    useEffect(() => {
        getTodaysAppoints();
    }, []);

    return (
        <div className="container-fluid">
            <DocNavbar />
            <div className="container" style={{ marginTop: "120px" }}>
                {/* <div className="text-center mt-2 fw-bold fs-3">Today's Appointments</div> */}

                <div className="mt-3">
                    {loading ? (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="table-responsive text-center">
                            <table className="table table-hover table-bordered shadow-sm">
                                <thead className="table-primary">
                                    <tr>
                                        <th>No.</th>
                                        <th>Owner Email</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Illness</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.length > 0 ? (
                                        appointments.map((appointment, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{appointment.owner?.owner?.email}</td>
                                                <td>{appointment.appointDate}</td>
                                                <td>{appointment.appointTime}</td>
                                                <td>{appointment.illness || "Not Mentioned"}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-info btn-sm me-2"
                                                        onClick={() => openPetHistoryModal(appointment.pet.id)}
                                                    >
                                                        View History
                                                    </button>
                                                    <button
                                                        className="btn btn-success btn-sm"
                                                        onClick={() => openAttendModal(appointment.id)}
                                                    >
                                                        Attend
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

                <div className="mt-3">
                    <button
                        className="btn btn-warning"
                        onClick={getUpcomingAppointments}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdropUpcomingAppointments"
                    >
                        Your Appointments
                    </button>
                </div>

                {/* Pet History Modal */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Pet History</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <table className="table table-hover table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            {/* <th>Consultation Date</th> */}
                                            {/* <th>Owner Name</th> */}
                                            {/* <th>Pet Name</th> */}
                                            {/* <th>Species</th> */}
                                            {/* <th>Breed</th> */}
                                            <th>Diagnosis</th>
                                            <th>Prescription</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {petHistory.length > 0 ? (
                                            petHistory.map((pets, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    {/* <td>{pets.appointDate}</td> */}
                                                    {/* <td>{pets.owner.owner.firstName} {pets.owner.owner.lastName}</td> */}
                                                    {/* <td>{pets.pet}</td> */}
                                                    {/* <td>{pets.petSpecies}</td> */}
                                                    {/* <td>{pets.petBreed}</td> */}
                                                    <td>{pets.
                                                        prescription.diagnosis}</td>
                                                    <td>{pets.prescription.
                                                        prescriptionAdvice}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7" className="text-center">No records found</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Attend Modal */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Pet Diagnosis and Prescription</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="form-label">Diagnosis:</label>
                                        <input type="text" onChange={handleChange} name='diagnosis' value={prescriptionDetails.diagnosis} className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message-text" className="form-label">Prescription:</label>
                                        <textarea className="form-control" onChange={handleChange} name='prescriptionAdvice' value={prescriptionDetails.prescriptionAdvice} id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={submitPrescription} type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upcoming Appointments Modal */}
                <div className="modal fade" id="staticBackdropUpcomingAppointments" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Upcoming Appointments</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <table className="table table-hover table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th>Appointment Date</th>
                                            <th>Appointment Time</th>
                                            <th>Owner Name</th>
                                            {/* <th>Pet Name</th> */}
                                            <th>Species</th>
                                            <th>Breed</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {upcoming.length > 0 ? (
                                            upcoming.map((up, index) => (
                                                <tr key={index}>
                                                    <td>{up.appointDate}</td>
                                                    <td>{up.appointTime}</td>
                                                    <td>{up.owner.owner.firstName} {up.owner.owner.lastName}</td>
                                                    {/* <td>{up.petName}</td> */}
                                                    <td>{up.pet.species}</td>
                                                    <td>{up.pet.breed}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="text-center">No records found</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
