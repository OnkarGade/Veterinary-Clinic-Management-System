import { ReceptionistNavbar } from "../Components/ReceptionistNavbar";

export function Receptionist() {



    return (
        <div className="container-fluid" style={{marginTop:"120px"}}>
            <ReceptionistNavbar />

            {/* Pending Request Page  */}

            <div className="container">
                <div>

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        data-bs-whatever="@mdo">Add</button>

                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Staff Details</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>

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
                                                        <td colspan="2">
                                                            <div className="form-floating mt-2">
                                                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                                                <label htmlFor="floatingTextarea2">Cause</label>
                                                            </div>
                                                        </td>
                                                    </tr>


                                                </tbody>

                                            </table>

                                        </div>

                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Owner Email</th>
                                <th>Appointment Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>

        </div>
    );
}