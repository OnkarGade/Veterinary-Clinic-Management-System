export function AddBill(){

    return(
        <div className="container-fluid">

            <div className="container">

            <div className="fw-bolder fs-3 mt-4" style={{ textAlign: "center" }}>
                    <span>Generate Bill</span>
                </div>

                <div className="table-responsive mt-4">
                    <table className="table table-borderless">
                        <tr>
                            <td>
                                <div className="col-md mt-2">
                                    <div className="form-floating">
                                        <select onChange={(e)=> setRole(e.target.value)} className="form-select" id="floatingSelectGrid">
                                            <option value='0' selected>Select Role</option>
                                            <option value='DOCTOR'>Doctor</option>
                                            <option value='RECEPTIONIST'>Receptionist</option>
                                        </select>
                                        <label htmlFor="floatingSelectGrid">Role</label>
                                    </div>
                                </div>
                            </td>
                            {role === '0' && <td>
                                <div className="col-md mt-2">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInputGrid" placeholder="" required=" " />
                                        <label htmlFor="floatingInputGrid">Email</label>
                                    </div>
                                </div>
                            </td>}
                            {role === 'DOCTOR' && <td>
                                <div className="col-md mt-2">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInputGrid" placeholder="" required=" " />
                                        <label htmlFor="floatingInputGrid">Doctor Email</label>
                                    </div>
                                </div>
                            </td>}
                            {role === 'RECEPTIONIST' &&<td>
                                <div className="col-md mt-2">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInputGrid" placeholder="" required=" " />
                                        <label htmlFor="floatingInputGrid">Receptionist Email</label>
                                    </div>
                                </div>
                            </td>}
                        </tr>
                        <tr>
                            <td>
                                <div className="col-md mt-2">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                                        <label htmlFor="floatingInputGrid">Password</label>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="col-md mt-2">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                                        <label htmlFor="floatingInputGrid">Re-Enter Password</label>
                                    </div>
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
                    </table>
                </div>

            </div>

        </div>
    );
}