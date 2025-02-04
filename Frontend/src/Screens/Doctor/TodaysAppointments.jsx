import { DocNavbar } from '../../Components/DocNavbar';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export function TodaysAppointments() {

    const [petHistory, setPetHistory] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/pethistory")
            .then(response => {
                setPetHistory(response.data)
            })
            .catch(error => {
                console.log("Error in fetching pet history: ", error)
            })
    }, []);

    return (
        <div className='container-fluid'>
            <DocNavbar />

            <div className="container">
                <div className="text-center mt-4"><span className="fw-bolder fs-3">Today's Appointments</span></div>

                <div className='table-responsive mt-4'>

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
                                {/* <td><Link to="/history" className="btn btn-primary">Click Here</Link></td> */}
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
                                {/* <td><Link to="/history" className="btn btn-primary">Click Here</Link></td> */}
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
                                {/* <td><Link to="/history" className="btn btn-primary">Click Here</Link></td> */}
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

                </div>

                <div>
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
