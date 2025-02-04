import { DocNavbar } from "../../Components/DocNavbar";

export function Prescription() {
    return (
        <div>
            <DocNavbar />

            <div className="row">
                <div className="col"></div>
                <div className="col-6">
                    <div className="container">
                        <div className="title mt-4" style={{ textAlign: "center" }}>
                            <span className="fw-bolder fs-3">Diagnose and Prescribe</span>
                        </div>
                        <div className="content">
                            {/* <form action="/submit" method="post"> */}
                            
                            <div className="table-responsive">
                                <table className="table table-borderless">

                                    <tr>
                                        <td>
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Write diagnosis here" id="floatingDiagnosis"></textarea>
                                                <label htmlFor="floatingTextarea">Diagnosis</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-floating">
                                                <textarea className="form-control" style={{height : "200px"}} placeholder="Write prescription here" id="floatingPrescription"></textarea>
                                                <label htmlFor="floatingTextarea">Prescription</label>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td colSpan={2} className='text-center'>
                                            <div className="fs-5">
                                                <input type="submit" value="Confirm" style={{ width: "30%" }} className="btn btn-success form-control" />
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
    );
}