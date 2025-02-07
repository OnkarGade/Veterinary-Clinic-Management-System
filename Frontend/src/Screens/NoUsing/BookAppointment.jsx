import { toast } from "react-toastify";
import { PetOwnerNavbar } from "../../Components/PetOwnerNavbar";
import { useEffect, useState } from "react";
import { BookAppointmentService } from "../../Services/AddServices";
import { GetMyPets } from "../../Services/GetServices";
import { GetDoctorsList } from "../../Services/DoctorServices";

export function BookAppointment() {

    const [yourPets, setYourPets] = useState([])
    const [doctors, setDoctors] = useState([])

    // State to store form inputs
    const [appointment, setAppointment] = useState({
        petId: '',
        doctorId: '',
        appointDate: '',
        appointTime: '',
    });


    const handleChange = (event) => {

        const { name, value } = event.target;

        setAppointment(prevAppointment => ({ ...prevAppointment, [name]: value }))

    }

    const handleSubmit = async () => {

        console.log('did ' + appointment.doctorId)

        await BookAppointmentService(appointment)
            .then(res => {
                if (res !== undefined) {

                    toast.success("Appointment booked successfully!");

                }
            })
            .catch(err => {
                toast.error('Error booking appointment. Please try again.' + err);
            })

    }

    const getMyPets = async () => {

        if (sessionStorage.getItem('id') !== null) {

            await GetMyPets(sessionStorage.getItem('id'))
                .then(response => {
                    console.log("hi " + response)
                    if (response !== undefined) {
                        console.log(response.data)
                        setYourPets(response.data)
                    }
                })
                .catch(error => {
                    console.log("Error in fetching your pet: ", error)
                })

        }


    }

    const getAllDoctors = async () => {

        await GetDoctorsList()
            .then(response => {
                console.log(response)
                if (response !== undefined) {
                    setDoctors(response.data)
                }
            }).catch(err => {
                console.log("Error Fetching Doctors : " + err)
            })

    }

    useEffect(() => {

        console.log('component mounted')

    }, [])

    return (
        <div className='container-fluid' onLoad={() => { getMyPets(); getAllDoctors(); }} style={{ marginTop: "110px" }}>
            <PetOwnerNavbar />

            <div className="row">
                <div className="col"></div>
                <div className="col-7">
                    <div className="container">
                        <div className="mt-4" style={{ textAlign: "center" }}>
                            <span className="fw-bolder fs-3">Book Appointment</span>
                        </div>
                        <div className="content">
                            {/* <form onSubmit={handleSubmit}> */}

                            <div className="table-responsive mt-4">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td>

                                                <div className="col-md mt-3">
                                                    <div className="form-floating">
                                                        <select onChange={handleChange} className="form-select"
                                                            id="floatingSelectGrid9" name="petId">
                                                            <option defaultValue={'None'}>Select Pet</option>
                                                            {yourPets.length !== 0 ?
                                                                yourPets.map((pet, index) => {
                                                                    return (
                                                                        <option key={index} value={pet.id}>{pet.name}</option>
                                                                    )
                                                                }) : <option disabled>No Pets Added</option>
                                                            }

                                                        </select>
                                                        <label htmlFor="floatingSelectGrid9">Pet</label>
                                                    </div>
                                                </div>

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>

                                                <div className="col-md mt-3">
                                                    <div className="form-floating">
                                                        <select onChange={handleChange} className="form-select"
                                                            id="floatingSelectGrid22" name="doctorId">
                                                            <option defaultValue={'None'}>Select Doctor</option>
                                                            {doctors.length !== 0 ?
                                                                doctors.map((doctor, index) => {
                                                                    return (
                                                                        <option key={index} value={doctor.id}>{doctor.name}</option>
                                                                    )
                                                                }) : <option disabled>No Doctors Available</option>
                                                            }

                                                        </select>
                                                        <label htmlFor="floatingSelectGrid22">Doctor</label>
                                                    </div>
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
                                                    <input type="submit" onClick={handleSubmit} value="Confirm Appointment" className="btn btn-success form-control fs-5" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>

        </div>
    )

}
