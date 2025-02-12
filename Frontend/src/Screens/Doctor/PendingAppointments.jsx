// import { Link } from "react-router-dom";
// import { DocNavbar } from "../Components/DocNavbar";
import { useEffect, useState } from "react";
// import { GetTodaysAppointments } from "../Services/GetServices";
import { toast } from "react-toastify";
import { DocNavbar } from "../../Components/DocNavbar";
import { GetTodaysAppointments } from "../../Services/GetServices";

export function PendingAppointments() {

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [petHistory, setPetHistory] = useState([])

    const getTodaysAppoints = async () => {
        setLoading(true); // Start loading

        try {
            var response = await GetTodaysAppointments()

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

        // axios.get("http://localhost:5000/doctor/appointments")
        //     .then((response) => {
        //         setAppointments(response.data);
        //         setLoading(false);
        //     })
        //     .catch((error) => {
        //         console.error("Error fetching appointments:", error);
        //         setError("Failed to load appointments");
        //         setLoading(false);
        //     });
    }, []);


    return (
        <div className="container-fluid">
            <DocNavbar />


            <div className="container" style={{ marginTop: "110px" }}>
                <div className="mt-2" style={{ textAlign: "center" }}><span className="fw-bolder fs-3">Today's Appointments</span></div>
                {/* <div className="text-center mt-4"><span className="fw-bolder fs-3">Today's Appointments</span></div> */}

                <div className="mt-3">
                    {loading ? (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="table-responsive text-center">
                            <table className="table table-hover table-bordered shadow-lg">
                                {/* The "shadow-lg" class will add a large shadow to the table */}
                                <thead className="table-primary">
                                    <tr>
                                        <th >Date</th>
                                        <th>Owner Id</th>
                                        <th >Owner Name</th>
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

                {/* <div className='table-responsive mt-4'>

                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th >Date</th>
                                <th>Owner Id</th>
                                <th >Owner Name</th>
                                <th >Pet Breed</th>
                                <th>Pet History</th>
                                <th>Attend</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>Id1</td>
                                <td>Id2</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Launch
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Attend this Pet</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Id1</td>
                                <td>Id2</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Launch
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Attend this Pet</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Id1</td>
                                <td>Id2</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Launch
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Attend this Pet</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div> */}

                <div className="mt-3">
                    <button className='btn btn-warning' type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropUpcomingAppointments">Upcoming Appointments</button>
                </div>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl" >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Pet History</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-bordered" >
                                        <thead>
                                            <tr>
                                                <th>Consultation Date</th>
                                                <th>Owner Name</th>
                                                <th>Pet Name</th>
                                                <th>Pet Species</th>
                                                <th>Pet Breed</th>
                                                <th>Diagnosis</th>
                                                <th>Prescription</th>
                                            </tr>

                                        </thead>
                                        <tbody>

                                            {petHistory.length > 0 ?
                                                petHistory.map((pet, index) => (
                                                    <tr key={index}>
                                                        <td>{pet.consultationDate}</td>
                                                        <td>{pet.ownerName}</td>
                                                        <td>{pet.petName}</td>
                                                        <td>{pet.petSpecies}</td>
                                                        <td>{pet.petBreed}</td>
                                                        <td>{pet.diagnosis}</td>
                                                        <td>{pet.prescription}</td>
                                                    </tr>
                                                ))
                                                : <tr>
                                                    <td colSpan="7" className='text-center'>No records found</td>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                {/* <button type="button" className="btn btn-primary">Understood</button> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Pet Diagnosis and Prescription</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="recipient-name" className="col-form-label">Diagnosis:</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Prescription:</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="staticBackdropUpcomingAppointments" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl" >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Pet History</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <table className="table table-hover table-bordered" >
                                    <thead>
                                        <tr>
                                            <th>Appointment Date</th>
                                            <th>Owner Name</th>
                                            <th>Pet Name</th>
                                            <th>Pet Species</th>
                                            <th>Pet Breed</th>
                                        </tr>

                                    </thead>
                                    <tbody>

                                        {petHistory.length > 0 ?
                                            petHistory.map((pet, index) => (
                                                <tr key={index}>
                                                    <td>{pet.appointmentDate}</td>
                                                    <td>{pet.ownerName}</td>
                                                    <td>{pet.petName}</td>
                                                    <td>{pet.petSpecies}</td>
                                                    <td>{pet.petBreed}</td>
                                                </tr>
                                            ))
                                            : <tr>
                                                <td colSpan="7" className='text-center'>No records found</td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                {/* <button type="button" className="btn btn-primary">Understood</button> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}