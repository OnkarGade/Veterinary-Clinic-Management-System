import { PetOwnerNavbar } from "../../Components/PetOwnerNavbar";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

export function BookAppointment() {

    // State to store form inputs
    const [appointment, setAppointment] = useState({
        petName: '',
        appointDate: '',
        appointTime: '',
    });

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAppointment(prevAppointment => ({ ...prevAppointment, [name]: value })); // spread operator (...prevAppointment) creates a new object copy of the existing appointment.
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Sending data to backend API of appointment booking of pet
            const response = await axios.post('http://localhost:8080/pet/appointment', appointment);
            // Show success toast
            toast.success("Appointment booked successfully!");
            // Clear form fields after successful submission
            setAppointment({
                petName: '',
                appointmentDate: '',
                appointmentTime: ''
            });
        } catch (error) {
            console.error('Error booking appointment pet', error);
            toast.error('Error booking appointment. Please try again.');
        }
    };

    return (
        <div className='container-fluid'>
            <PetOwnerNavbar />

            <div className="row">
                <div className="col"></div>
                <div className="col-7">
                    <div className="container">
                        <div className="mt-4" style={{ textAlign: "center" }}>
                            <span className="fw-bolder fs-3">Book Appointment</span>
                        </div>
                        <div className="content">
                            <form onSubmit={handleSubmit}>

                                <div className="table-responsive mt-4">
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control" name="petName" value={appointment.petName} onChange={handleChange} id="floatingInput" placeholder="name@example.com" />
                                                        <label htmlFor="floatingInput">Pet Name</label>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div class="form-floating mt-2">
                                                        <input type="date" class="form-control" name="appointDate" value={appointment.appointDate} onChange={handleChange} id="floatingDate" />
                                                        <label htmlFor="floatingPassword">Date of Appointment</label>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div class="form-floating mt-2">
                                                        <input type="time" class="form-control" name="appointTime" value={appointment.appointTime} onChange={handleChange} id="floatingTime" />
                                                        <label htmlFor="floatingPassword">Time of Appointment</label>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="mt-2">
                                                        <input type="submit" value="Confirm Appointment" className="btn btn-success form-control fs-5" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>

        </div>
    )
}

// export default BookAppointment;