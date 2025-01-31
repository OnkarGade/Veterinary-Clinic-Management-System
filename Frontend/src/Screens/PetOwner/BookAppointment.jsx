import { PetOwnerNavbar } from "../../Components/PetOwnerNavbar";

export function BookAppointment() {
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
                            {/* <form action="/submit" method="post"> */}

                            <div className="table-responsive mt-4">
                                <table className="table table-borderless">

                                    <tr>
                                        <td>

                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Pet Name</label>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div class="form-floating mt-2">
                                                <input type="date" class="form-control" id="floatingDate" placeholder="Date" />
                                                <label for="floatingPassword">Date of Appointment</label>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div class="form-floating mt-2">
                                                <input type="time" class="form-control" id="floatingTime" placeholder="Time" />
                                                <label for="floatingPassword">Time of Appointment</label>
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

// export default BookAppointment;