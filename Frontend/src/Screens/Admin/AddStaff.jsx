import { useEffect, useState } from "react";
import { AdminNavbar } from "../../Components/AdminNavbar";
import { useNavigate } from "react-router-dom";
import { RegisterStaffService } from "../../Services/RegisterService";
import { toast } from "react-toastify";

export function AddStaff() {

    const navigate = useNavigate();

    const [role, setRole] = useState('0')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    // navigator('/receptionist')

    const afterSubmit = async () => {

        if (password === rePassword) {

            const data = await RegisterStaffService({ role, email, password })
            
            console.log(data)

            toast.success("Staff Has Been Added")

            navigate('/admin')
            

        } else {

            toast.error("Passwords Not Matching")

        }




    }

    useEffect(() => {

    }, [role])

    return (
        <div className="container-fluid">

            <AdminNavbar />

            <div className="container" style={{marginTop:"150px"}}>
            <div className="container">

                <div className="fw-bolder fs-3 mt-4" style={{ textAlign: "center" }}>
                    <span>Add Staff Detail's</span>
                </div>

                <div className="table-responsive mt-4">
                    <table className="table table-borderless">
                        <tr>
                            <td>
                                <div className="col-md mt-2">
                                    <div className="form-floating">
                                        <select onChange={(e) => setRole(e.target.value)} className="form-select" id="floatingSelectGrid">
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
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInputGrid" placeholder="" required=" " />
                                        <label htmlFor="floatingInputGrid">Email</label>
                                    </div>
                                </div>
                            </td>}
                            {role === 'DOCTOR' && <td>
                                <div className="col-md mt-2">
                                    <div className="form-floating">
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInputGrid" placeholder="" required=" " />
                                        <label htmlFor="floatingInputGrid">Doctor Email</label>
                                    </div>
                                </div>
                            </td>}
                            {role === 'RECEPTIONIST' && <td>
                                <div className="col-md mt-2">
                                    <div className="form-floating">
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInputGrid" placeholder="" required=" " />
                                        <label htmlFor="floatingInputGrid">Receptionist Email</label>
                                    </div>
                                </div>
                            </td>}
                        </tr>
                        <tr>
                            <td>
                                <div className="col-md mt-2">
                                    <div className="form-floating">
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                                        <label htmlFor="floatingInputGrid">Password</label>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="col-md mt-2">
                                    <div className="form-floating">
                                        <input onChange={(e) => setRePassword(e.target.value)} type="password" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                                        <label htmlFor="floatingInputGrid">Re-Enter Password</label>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>

                            <td colSpan={2}>
                                <div className="mt-3" style={{ textAlign: "center" }}>
                                    <button className="btn btn-primary col-3 fs-5" onClick={() => { afterSubmit() }}>Submit</button>
                                </div>
                            </td>

                        </tr>
                    </table>
                </div>
                                
            </div>

        </div>
    );

}