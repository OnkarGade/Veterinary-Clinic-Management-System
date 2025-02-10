import { useNavigate } from "react-router-dom";
// import { Login } from "./Login";
import { useState } from "react";
import { toast } from "react-toastify";
import { RegisterService } from "../../Services/RegisterService";

export function Register() {


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState(0)
    const [phoneNo, setPhoneNo] = useState(0)
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [gender, setGender] = useState('')
    const [role, setRole] = useState('PETOWNER')


    // const validatePassword = (password) => {
    //     const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //     return passwordRegex.test(password);
    //   };

    const navigate = useNavigate();

    const afterRegister = async () => {

        if (password === rePassword) {


            const data = await RegisterService({ firstName, lastName, email, age, phoneNo, password, gender, role })

            console.log(data)
        }

    }

    return (
        <div className="container">

            <div className="row">
                <div className="col"></div>
                <div className="col-7">
                    <div className="container">
                        <div className="title mt-5" style={{ textAlign: "center" }}>
                            <span className="fw-bolder fs-2">Sign Up</span>
                        </div>
                        <div className="content mt-3">
                            {/* <form action="/submit" method="post"> */}

                            <div className="table-responsive">
                                <table className="table table-borderless">

                                    <tr>
                                        <td>

                                            <div className="col-md mt-3">
                                                <div className="form-floating">
                                                    <input type="email" onChange={(e) => setFirstName(e.target.value)} className="form-control" id="floatingInputGrid1" placeholder="" required=" " />
                                                    <label htmlFor="floatingInputGrid">First Name</label>
                                                </div>
                                            </div>

                                        </td>
                                        <td>

                                            <div className="col-md mt-3">
                                                <div className="form-floating">
                                                    <input type="email" onChange={(e) => setLastName(e.target.value)} className="form-control" id="floatingInputGrid2" placeholder="" required=" " />
                                                    <label htmlFor="floatingInputGrid">Last Name</label>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td colSpan={2}>

                                            <div className="col-md mt-3">
                                                <div className="form-floating">
                                                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInputGrid3" placeholder="" required=" " />
                                                    <label htmlFor="floatingInputGrid">Email</label>
                                                </div>
                                            </div>


                                        </td>
                                    </tr>

                                    <tr>
                                        <td>

                                            <div className="col-md mt-3">
                                                <div className="form-floating">
                                                    <input type="number" onChange={(e) => setAge(e.target.value)} min="10" max="100" className="form-control" id="floatingInputGrid4" placeholder="" required=" " />
                                                    <label htmlFor="floatingInputGrid">Age</label>
                                                </div>
                                            </div>

                                        </td>
                                        <td>

                                            <div className="input-group mt-3">
                                                <span className="input-group-text">+91</span>
                                                <div className="form-floating">
                                                    <input type="tel" onChange={(e) => { setPhoneNo(e.target.value) }} className="form-control" id="floatingInputGroup5" placeholder="" pattern="[0-9]{10}" required=" " />
                                                    <label htmlFor="floatingInputGroup1">Phone No</label>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td>

                                            <div className="col-md mt-3">
                                                <div className="form-floating">
                                                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="floatingInputGrid6" placeholder="" required=" " />
                                                    <label htmlFor="floatingInputGrid">Password</label>
                                                </div>
                                            </div>

                                        </td>
                                        <td>

                                            <div className="col-md mt-3">
                                                <div className="form-floating">
                                                    <input type="password" onChange={(e) => { setRePassword(e.target.value) }} className="form-control" id="floatingInputGrid7" placeholder="" required=" " />
                                                    <label htmlFor="floatingInputGrid">Re-Entered Password</label>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="col-md mt-3">
                                                <div className="form-floating">
                                                    <select onChange={(e) => setGender(e.target.value)} className="form-select" id="floatingSelectGrid9">
                                                        <option selected>Select Gender</option>
                                                        <option value="MALE">Male</option>
                                                        <option value="FEMALE">Female</option>
                                                        <option value="OTHER">Other</option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid">Gender</label>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-md mt-3">
                                                <div className="form-floating">
                                                    <select className="form-select" id="floatingSelectGrid10">
                                                        <option value="PETOWNER" selected>Pet Owner</option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid11">Role</label>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="mt-3">
                                                <button onClick={() => afterRegister()} className="btn btn-success form-control fs-5">Sign Up</button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="mt-3">

                                                <button className="btn btn-primary form-control fs-5" onClick={() => { (navigate('/')) }} > Go Back </button>

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