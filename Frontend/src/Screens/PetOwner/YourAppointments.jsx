import { useEffect, useState } from "react";
import { PetOwnerNavbar } from "../../Components/PetOwnerNavbar";
import { GetMyPets, GetPendingApprovedAppointments } from "../../Services/GetServices";
import { BookAppointmentService } from "../../Services/AddServices";
import { toast } from "react-toastify";
import { GetDoctorsList } from "../../Services/DoctorServices";

export function YourAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [onChangeEvent, setOnChange] = useState([]);
    const [yourPets, setYourPets] = useState([]);
    const [doctors, setDoctors] = useState([]);

    const [appointment, setAppointment] = useState({
        petId: '',
        doctorId: 0,
        appointDate: '',
        appointTime: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAppointment(prevAppointment => ({ ...prevAppointment, [name]: value }));
    };

    const handleSubmit = async () => {
        await BookAppointmentService(appointment)
            .then(res => {
                if (res !== undefined) {
                    toast.success("Appointment booked successfully!");
                    setOnChange(res.data);
                }
            })
            .catch(err => {
                toast.error('Error booking appointment. Please try again.' + err);
            });
        afterBookingClear();
    };

    const getMyPets = async () => {
        if (sessionStorage.getItem('token') !== null) {
            await GetMyPets()
                .then(response => {
                    if (response !== undefined) {
                        setYourPets(response.data);
                    }
                })
                .catch(error => {
                    console.log("Error in fetching your pet: ", error);
                });
        }
    };

    const getAllDoctors = async () => {
        await GetDoctorsList()
            .then(response => {
                if (response !== undefined) {
                    setDoctors(response.data);
                }
            }).catch(err => {
                console.log("Error Fetching Doctors : " + err);
            });
    };

    const afterBookingClear = () => {
        setAppointment({
            petId: '',
            doctorId: '',
            appointDate: '',
            appointTime: '',
        });
    };

    useEffect(() => {
        const getPendingApprovedAppointments = async () => {
            GetPendingApprovedAppointments().then(response => {
                if (response !== undefined) {
                    setAppointments(response.data);
                }
            }).catch(err => {
                console.log('Error:', err);
            });
        };
        getPendingApprovedAppointments();
    }, [onChangeEvent]);

    return (
        <div className="container-fluid" style={{ marginTop: "120px" }}>
            <PetOwnerNavbar />
            <div className="container mt-4">
                <div className="text-center mb-4">
                    <span className="fw-bolder fs-3">Your Appointments</span>
                </div>

                <div className="table-responsive mb-4">
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
                            {appointments.length !== 0 ?
                                appointments.map((appointment, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{appointment.appointDate}</td>
                                        <td>{appointment.appointTime}</td>
                                        <td>{appointment.pet.name}</td>
                                        <td>{appointment.status}</td>
                                    </tr>
                                )) :
                                <tr>
                                    <td colSpan={5} style={{ textAlign: "center" }}>No Appointments Pending</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>

                <div className="d-flex justify-content-end">
                    <button onClick={() => { getMyPets(); getAllDoctors(); }} type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa fa-calendar-plus"></i> Book Appointment
                    </button>
                </div>

                {/* Book Appointment Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Book Appointment</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="table-responsive">
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-floating mb-3">
                                                        <select onChange={handleChange} className="form-select" id="floatingSelectPet" name="petId">
                                                            <option defaultValue={'None'}>Select Pet</option>
                                                            {yourPets.length !== 0 ?
                                                                yourPets.map((pet, index) => (
                                                                    <option key={index} value={pet.id}>{pet.name}</option>
                                                                )) : <option disabled>No Pets Added</option>
                                                            }
                                                        </select>
                                                        <label htmlFor="floatingSelectPet">Pet</label>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="form-floating mb-3">
                                                        <select onChange={handleChange} className="form-select" id="floatingSelectDoctor" name="doctorId">
                                                            <option defaultValue={'None'}>Select Doctor</option>
                                                            {doctors.length !== 0 ?
                                                                doctors.map((doctor, index) => (
                                                                    <option key={index} value={doctor.id}>{doctor.name}</option>
                                                                )) : <option disabled>No Doctors Available</option>
                                                            }
                                                        </select>
                                                        <label htmlFor="floatingSelectDoctor">Doctor</label>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="form-floating mb-3">
                                                        <input type="date" className="form-control" name="appointDate" value={appointment.appointDate} onChange={handleChange} id="floatingDate" />
                                                        <label htmlFor="floatingDate">Date of Appointment</label>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="form-floating mb-3">
                                                        <input type="time" className="form-control" name="appointTime" value={appointment.appointTime} onChange={handleChange} id="floatingTime" />
                                                        <label htmlFor="floatingTime">Time of Appointment</label>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={handleSubmit} type="button" className="btn btn-primary" data-bs-dismiss="modal">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
