import { useNavigate } from "react-router-dom";
import { ReceptionistNavbar } from "../../Components/ReceptionistNavbar";

export function AddAppointment() {

    const navigator = useNavigate();

    return (


        <div className="container-fluid">

            <ReceptionistNavbar />

            <div className="container">

                <div className="fw-bolder fs-3 mt-4" style={{ textAlign: "center" }}>
                    <span>Add Appointment Detail's</span>
                </div>

                <div className="table-responsive mt-4">
             
                    <table className="table table-borderless">
                 
                        <tbody>
                         
                            <tr>
                                <td>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                                            <label htmlFor="floatingInputGrid">Pet Owner</label>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="col-md mt-2">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                                            <label htmlFor="floatingInputGrid">Pet</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    <div className="col-md mt-2">
                                        <div className="form-floating">
                                            <select className="form-select" id="floatingSelectGrid">
                                                <option selected>Select Doctor</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <label htmlFor="floatingSelectGrid">Assign a doctor</label>
                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <div className="col-md mt-2">
                                        <div className="form-floating">
                                            <select className="form-select" id="floatingSelectGrid">
                                                <option selected>Select Receptionist</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <label htmlFor="floatingSelectGrid">Assign by </label>
                                        </div>
                                    </div>

                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <div className="col-md mt-2">
                                        <div className="form-floating">
                                            <input type="Date" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                                            <label htmlFor="floatingInputGrid">Appointment Date</label>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="col-md mt-2">
                                        <div className="form-floating">
                                            <input type="time" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                                            <label htmlFor="floatingInputGrid">Appointment Time</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <div className="form-floating mt-2">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                        <label htmlFor="floatingTextarea2">Cause</label>
                                    </div>
                                </td>
                            </tr>

                            <tr>

                                <td colSpan={2}>
                                    <div className="mt-3" style={{ textAlign: "center" }}>
                                        <button className="btn btn-primary col-3 fs-5" onClick={() => { navigator('/receptionist') }}>Submit</button>
                                    </div>
                                </td>

                            </tr>
                      
                        </tbody>
                  
                    </table>

                </div>

            </div>

        </div>
    );

}