import { toast } from "react-toastify";
import { PetOwnerNavbar } from "../../Components/PetOwnerNavbar";
import { useState } from "react";
import { BookAppointmentService } from "../../Services/AddServices";

export function BookAppointment() {

    // State to store form inputs
    const [appointment, setAppointment] = useState({
        petName: '',
        appointDate: '',
        appointTime: '',
    });

    // const [yourPets, setYourPets] = useState([])

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
            await BookAppointmentService(appointment)
                .then(data => {
                    toast.success("Appointment booked successfully!");
                })
                .catch(err => {
                    toast.error('Error booking appointment. Please try again.');
                })
            // Show success toast
            // Clear form fields after successful submission
            setAppointment({
                petName: '',
                appointmentDate: '',
                appointmentTime: ''
            });
        } catch (error) {
            console.error('Error booking appointment pet', error);
        }
    };

    // var getMyPets = async () => {

    //     await getMyPets(sessionStorage.getItem('id'))
    //         .then(res => {
    //             setYourPets(res)
    //         }).catch(err => {
    //             console.log(" error ")
    //         }) 

    // }

    // useEffect(() => {
    //     console.log("Component Mount")
    // }, [])

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

                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" name="petName" value={appointment.petName} onChange={handleChange} id="floatingInput" placeholder="name@example.com" />

                                                        <label htmlFor="floatingInput">Pet Name</label>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="form-floating mt-2">
                                                        <input type="date" className="form-control" name="appointDate" value={appointment.appointDate} onChange={handleChange} id="floatingDate" />
                                                        <label htmlFor="floatingPassword">Date of Appointment</label>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="form-floating mt-2">
                                                        <input type="time" className="form-control" name="appointTime" value={appointment.appointTime} onChange={handleChange} id="floatingTime" />
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


    // return (
    //     <div className='container-fluid'>
    //         <PetOwnerNavbar />

    //         <div className="row">
    //             <div className="col"></div>
    //             <div className="col-7">
    //                 <div className="container">
    //                     <div className="mt-4" style={{ textAlign: "center" }}>
    //                         <span className="fw-bolder fs-3">Book Appointment</span>
    //                     </div>
    //                     <div className="content">
    //                         {/* <form action="/submit" method="post"> */}

    //                         <div className="table-responsive mt-4">
    //                             <table className="table table-borderless">

    //                                 <tr>
    //                                     <td>

    //                                         <div className="form-floating">
    //                                             <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
    //                                             <label htmlFor="floatingInput">Pet Name</label>
    //                                         </div>
    //                                     </td>
    //                                 </tr>

    //                                 <tr>
    //                                     <td>
    //                                         <div className="form-floating mt-2">
    //                                             <input type="date" className="form-control" id="floatingDate" placeholder="Date" />
    //                                             <label htmlFor="floatingPassword">Date of Appointment</label>
    //                                         </div>
    //                                     </td>
    //                                 </tr>

    //                                 <tr>
    //                                     <td>
    //                                         <div className="form-floating mt-2">
    //                                             <input type="time" className="form-control" id="floatingTime" placeholder="Time" />
    //                                             <label htmlFor="floatingPassword">Time of Appointment</label>
    //                                         </div>
    //                                     </td>
    //                                 </tr>

    //                                 <tr>
    //                                     <td>
    //                                         <div className="mt-2">
    //                                             <input type="submit" value="Confirm Appointment" className="btn btn-success form-control fs-5" />
    //                                         </div>
    //                                     </td>
    //                                 </tr>

    //                             </table>
    //                         </div>

    //                         {/* </form> */}
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col"></div>
    //         </div>

    //     </div>
    // )
}

// export default BookAppointment;