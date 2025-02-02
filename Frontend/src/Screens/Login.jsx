import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginService } from "../Services/LoginService";
import { toast } from "react-toastify";
import { RegisterService } from "../Services/RegisterService";

export function Login() {


    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState(0)
    const [phoneNo, setPhoneNo] = useState(0)
    const [rePassword, setRePassword] = useState('')
    const [gender, setGender] = useState('')
    const [role, setRole] = useState('PETOWNER')
    // const [data, setData] = useState([])

    const afterLogin = async () => {

        if (email !== '') {

            if (password !== '') {


                await LoginService({ email, password })
                    .then((data) => {

                        console.log(data)

                        if (data === undefined) {

                            toast.info('Invalid Credentials')

                        } else {

                            if (data.role === 'DOCTOR') {
                                navigate('/doctor')
                            } else if (data.role === 'RECEPTIONIST') {
                                navigate('/receptionist')
                            } else if (data.role === 'ADMIN') {
                                navigate('/admin')
                            } else {
                                navigate('/petowner')
                            }
                        }
                    })
                    .catch((error => console.log("Check Your Connection With Server")))

            } else {
                toast.warning("Password Can't Be Empty")
            }


        } else {
            toast.warning("Email Can't Be Empty")
        }


    }

    const afterRegister = async () => {

        if (password === rePassword) {


            const data = await RegisterService({ firstName, lastName, email, age, phoneNo, password, gender, role })

            console.log(data)
        } else {
            toast.warning('Passwords Are Not Matching')
        }

    }

    return (
        <div>

            <div className="container" style={{ marginTop: "120px" }}>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-5">
                        <div className="table-responsive container-fluid">
                            <div className="mt-5" style={{ textAlign: "center" }}>
                                <span className="fw-bolder fs-2">Sign in</span>
                            </div>
                            {/* <form action="/register" method="post"> */}
                            <table className="table table-borderless">

                                <tr>
                                    <td>
                                        <div className="col-md mt-3">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="floatingInputGrid1" placeholder="Enter Email Here" required=" " />
                                                <label htmlFor="floatingInputGrid1">Email address</label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="col-md mt-3">
                                            <div className="form-floating">
                                                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="floatingInputGrid2" placeholder="Enter Email Here" required=" " />
                                                <label htmlFor="floatingInputGrid2">Password</label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div style={{ textAlign: "center" }}>
                                            <button onClick={() => { afterLogin() }} className="mt-3 fs-5 btn btn-primary col-12">Sign In</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="fs-6 mt-2" style={{ textAlign: "center" }}>
                                            <span>Don't Have Account? <Link type="button" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                data-bs-whatever="@mdo">Sign Up</Link></span>
                                        </div>
                                    </td>
                                </tr>

                            </table>
                            {/* </form> */}
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Sign Up</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="table-responsive">
                                    <table className="table table-borderless">

                                        <tr>
                                            <td>

                                                <div className="col-md mt-3">
                                                    <div className="form-floating">
                                                        <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control"
                                                            id="floatingInputGrid0" placeholder=""
                                                            required=" " />
                                                        <label htmlFor="floatingInputGrid0">First
                                                            Name</label>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>

                                                <div className="col-md mt-3">
                                                    <div className="form-floating">
                                                        <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control"
                                                            id="floatingInputGrid22" placeholder=""
                                                            required=" " />
                                                        <label htmlFor="floatingInputGrid22">Last Name</label>
                                                    </div>
                                                </div>

                                            </td>
                                        </tr>

                                        <tr>
                                            <td colspan="2">

                                                <div className="col-md mt-3">
                                                    <div className="form-floating">
                                                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control"
                                                            id="floatingInputGrid3" placeholder=""
                                                            required=" " />
                                                        <label htmlFor="floatingInputGrid3">Email</label>
                                                    </div>
                                                </div>


                                            </td>
                                        </tr>

                                        <tr>
                                            <td>

                                                <div className="col-md mt-3">
                                                    <div className="form-floating">
                                                        <input onChange={(e) => setAge(e.target.value)} type="number" className="form-control"
                                                            id="floatingInputGrid4" placeholder=""
                                                            required=" " />
                                                        <label htmlFor="floatingInputGrid4">Age</label>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>

                                                <div className="input-group mt-3">
                                                    <span className="input-group-text">+91</span>
                                                    <div className="form-floating">
                                                        <input onChange={(e) => setPhoneNo(e.target.value)} type="tel" className="form-control"
                                                            id="floatingInputGroup5" placeholder=""
                                                            pattern="[0-9]{10}" required=" " />
                                                        <label htmlFor="floatingInputGroup5">Phone
                                                            No</label>
                                                    </div>
                                                </div>

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>

                                                <div className="col-md mt-3">
                                                    <div className="form-floating">
                                                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control"
                                                            id="floatingInputGrid6" placeholder=""
                                                            required=" " />
                                                        <label htmlFor="floatingInputGrid6">Password</label>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>

                                                <div className="col-md mt-3">
                                                    <div className="form-floating">
                                                        <input onChange={(e) => setRePassword(e.target.value)} type="password" className="form-control"
                                                            id="floatingInputGrid7" placeholder=""
                                                            required=" " />
                                                        <label htmlFor="floatingInputGrid7">Re-Entered
                                                            Password</label>
                                                    </div>
                                                </div>

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="col-md mt-3">
                                                    <div className="form-floating">
                                                        <select onChange={(e) => setGender(e.target.value)} className="form-select"
                                                            id="floatingSelectGrid9">
                                                            <option selected>Select Gender</option>
                                                            <option value="MALE">Male</option>
                                                            <option value="FEMALE">Female</option>
                                                            <option value="OTHER">Other</option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid9">Gender</label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="col-md mt-3">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="floatingInputGrid10"
                                                            placeholder="" value="Pet Owner" readonly />
                                                        <label htmlFor="floatingInputGrid10">Role</label>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                    </table>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={afterRegister} type="button" className="btn btn-primary" data-bs-dismiss="modal">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
