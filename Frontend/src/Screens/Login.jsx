import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginService } from "../Services/LoginService";
import { toast } from "react-toastify";
import { RegisterService } from "../Services/RegisterService";

export function Login() {

    const navigate = useNavigate();

    const [userRegister, setUserRegister] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: '',
        dob: '',
        role: 'PETOWNER',
        phoneNo: '',
        gender: '',
        address: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserRegister(prev => ({ ...prev, [name]: value }));
    };

    const validateLogin = () => {
        if (!userRegister.email || !userRegister.password) {
            toast.warning("Email and Password are required.");
            return false;
        }
        // Additional email validation can be added here
        return true;
    };

    const afterLogin = async () => {
        if (!validateLogin()) return;

        await LoginService({ email: userRegister.email, password: userRegister.password })
            .then((data) => {
                if (data === undefined) {
                    toast.info('Invalid Credentials');
                } else {
                    sessionStorage.setItem('token', data.jwt);
                    if (data.role === 'DOCTOR') {
                        navigate('/doctor');
                    } else if (data.role === 'RECEPTIONIST') {
                        navigate('/receptionist');
                    } else if (data.role === 'ADMIN') {
                        navigate('/admin');
                    } else {
                        navigate('/petowner');
                    }
                }
            })
            .catch(() => toast.info("Check Your Connection With Server"));
    };

    const validateRegister = () => {
        if (!userRegister.firstName || !userRegister.lastName || !userRegister.email || !userRegister.dob ||
            !userRegister.phoneNo || !userRegister.password || !userRegister.rePassword) {
            toast.warning('All fields are required');
            return false;
        }
        if (userRegister.password !== userRegister.rePassword) {
            toast.warning('Passwords do not match');
            return false;
        }
        if (userRegister.phoneNo.length !== 10) {
            toast.warning('Phone number must be 10 digits');
            return false;
        }
        // Additional email validation and password strength check can be added here
        return true;
    };

    const afterRegister = async () => {
        if (!validateRegister()) return;

        await RegisterService(userRegister)
            .then(res => {
                if (res.status === 201) {
                    toast.success('Successfully Registered');
                }
                if (res.status === 403) {
                    toast.info('Email Already Exist');
                }
                if (res.status === 500) {
                    toast.info('Try Again Later');
                }
            })
            .catch(() => toast.info('Something Went Wrong'));

        handleAfterChange();
    };

    const handleAfterChange = () => {
        setUserRegister({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            rePassword: '',
            dob: '',
            role: 'PETOWNER',
            phoneNo: '',
            gender: '',
            address: ''
        });
    };

    useEffect(() => {
        console.log('component mounted');
    }, []);

    return (
        <div>
            <div className="container" style={{ marginTop: "80px" }}>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-5">
                        <div className="table-responsive container-fluid">
                            <div className="mt-5" style={{ textAlign: "center" }}>
                                <span className="fw-bolder fs-2">Sign in</span>
                            </div>
                            <table className="table table-borderless">
                                <tr>
                                    <td>
                                        <div className="col-md mt-3">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" onChange={handleChange}
                                                    id="floatingInputGrid1" value={userRegister.email} name="email" placeholder="Enter Email Here" />
                                                <label htmlFor="floatingInputGrid1">Email address</label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="col-md mt-3">
                                            <div className="form-floating">
                                                <input type="password" className="form-control" onChange={handleChange}
                                                    id="floatingInputGrid2" name="password" placeholder="Enter Email Here" required=" " />
                                                <label htmlFor="floatingInputGrid2">Password</label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div style={{ textAlign: "center" }}>
                                            <button onClick={afterLogin} className="mt-3 fs-5 btn btn-primary col-12">Sign In</button>
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
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>

            {/* Sign Up Modal */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Sign Up</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="table-responsive">
                                <table className="table table-borderless">
                                    <tr>
                                        <td>
                                            <div className="col-md mt-2">
                                                <div className="form-floating">
                                                    <input onChange={handleChange} type="text" className="form-control"
                                                        id="floatingInputGrid0" value={userRegister.firstName} name="firstName" placeholder=""
                                                        required=" " />
                                                    <label htmlFor="floatingInputGrid0">First Name</label>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-md mt-2">
                                                <div className="form-floating">
                                                    <input onChange={handleChange} type="text" className="form-control"
                                                        id="floatingInputGrid22" value={userRegister.lastName} name="lastName" placeholder=""
                                                        required=" " />
                                                    <label htmlFor="floatingInputGrid22">Last Name</label>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <div className="col-md mt-2">
                                                <div className="form-floating">
                                                    <input onChange={handleChange} type="email" className="form-control"
                                                        id="floatingInputGrid3" value={userRegister.email} name="email" placeholder=""
                                                        required=" " />
                                                    <label htmlFor="floatingInputGrid3">Email</label>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="col-md mt-2">
                                                <div className="form-floating">
                                                    <input onChange={handleChange} type="date" className="form-control"
                                                        id="floatingInputGrid4" value={userRegister.dob} name="dob" placeholder=""
                                                        required=" " />
                                                    <label htmlFor="floatingInputGrid4">Date Of Birth</label>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mt-2">
                                                <div className="form-floating">
                                                    <input onChange={handleChange} type="tel" className="form-control"
                                                        id="floatingInputGroup5" value={userRegister.phoneNo} name="phoneNo" placeholder=""
                                                        pattern="[0-9]{10}" required=" " />
                                                    <label htmlFor="floatingInputGroup5">Phone No</label>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="col-md mt-2">
                                                <div className="form-floating">
                                                    <input onChange={handleChange} type="password" className="form-control"
                                                        id="floatingInputGrid6" value={userRegister.password} name="password" placeholder=""
                                                        required=" " />
                                                    <label htmlFor="floatingInputGrid6">Password</label>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-md mt-2">
                                                <div className="form-floating">
                                                    <input onChange={handleChange} type="password" className="form-control"
                                                        id="floatingInputGrid7" value={userRegister.rePassword} name="rePassword" placeholder=""
                                                        required=" " />
                                                    <label htmlFor="floatingInputGrid7">Re-Entered Password</label>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="col-md mt-2">
                                                <div className="form-floating">
                                                    <select onChange={handleChange} className="form-select"
                                                        id="floatingSelectGrid9" value={userRegister.gender} name="gender">
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
                                            <div className="col-md mt-2">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingInputGrid10"
                                                        value="Pet Owner" placeholder="" name="role" readOnly />
                                                    <label htmlFor="floatingInputGrid10">Role</label>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div className="col-md mt-2">
                                                <div className="form-floating">
                                                    <textarea onChange={handleChange} name="address" value={userRegister.address} className="form-control" placeholder="Leave a comment here" id="floatingTextarea24" style={{ height: "80px" }}></textarea>
                                                    <label htmlFor="floatingTextarea24">Address</label>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
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
