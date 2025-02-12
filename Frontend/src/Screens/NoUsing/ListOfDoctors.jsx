import { useEffect } from "react";
import { toast } from "react-toastify";
import { AdminNavbar } from '../../Components/AdminNavbar';
import { useState } from "react";
import { DeleteDoctor, GetListOfDoctors, ReinstateDoctor } from "../../Services/DoctorServices";

export function ListOfDoctors(){

    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState('')

    // const [error, setError] = useState(null);

    // const [doctor, setDoctor] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phoneNo: '',
    //     gender: '',
    //     image: '',
    //     degree: '',
    //     specialist: ''
    // })

    const getListOfDoctors = async () => {
        // setLoading(true); // Start loading
        // console.log(doctor.firstName)
        try {
            var response = await GetListOfDoctors()

            console.log(response)
            
            if (response?.data) {
                setDoctors(response.data)

                // var dbImage = response.data.doctor.image
                // // Handle base64 format, if necessary
                
                // if (dbImage.startsWith("data:image")) {
                //     setImage(dbImage);
                // } else {
                //     // Assuming it's a blob or accessible URL
                //     setImage(`data:image/jpeg;base64,${dbImage}`);
                // }

            } else {
                toast.info("No Doctors available.");
            }
        } catch (err) {
            console.error("Error fetching list of Doctors :", err);
            // toast.error("Failed to load list of doctors.");
        } finally {
            setLoading(false); // End loading
        }

    }

        // Handle doctor delete approval
        const deleteDoctor = async (userId) => {
    
            console.log(userId)
    
            await DeleteDoctor(userId)
                .then(res => {
                    if (res?.status) {
                        toast.success(`Doctor deleted Approved`); // Temporary success message
                    } else {
                        console.log(res)
                    }
                }).catch(err => {
                    console.log(err)
                })
    
            // Implement the approve logic (using your API service)
            GetListOfDoctors(); // Refresh list
        };

              // Handle doctor delete approval
              const reinstateDoctor = async (userId) => {
    
                console.log(userId)
        
                await ReinstateDoctor(userId)
                    .then(res => {
                        if (res?.status) {
                            toast.success(`Doctor reinstated.`); // Temporary success message
                        } else {
                            console.log(res)
                        }
                    }).catch(err => {
                        console.log(err)
                    })
        
                // Implement the approve logic (using your API service)
                GetListOfDoctors(); // Refresh list
            };


    // Fetch data from backend using Axios
    useEffect(() => {

        getListOfDoctors();

    }, []);


    return(
        <div className="container-fluid">
            <AdminNavbar />

            <div className="container mt-4">
                <div className="text-center mb-4">
                    <span className="fw-bolder fs-3">Doctors List</span>
                </div>

                <div className="table-responsive mb-4">
                    <table className="table table-hover table-bordered shadow-sm">
                        <thead className="table-primary">
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                {/* <th>Gender</th> */}
                                <th>Phone No.</th>
                                {/* <th>Degree</th> */}
                                {/* <th>Specialist</th> */}
                                {/* <th>Image</th> */}
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.length !== 0 ?
                                doctors.map((doc, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{doc.doctor.firstName} {doc.doctor.lastName}</td>
                                        <td>{doc.doctor.email}</td>
                                        {/* <td>{doc.doctor.gender}</td> */}
                                        <td>{doc.doctor.phoneNo}</td>
                                        {/* <td>{doc.degree}</td> */}
                                        {/* <td>{doc.specialist}</td> */}
                                        <td>{doc.doctor.active === false ? `Not Active`:`Active`}</td>
                                        {/* <td>{image}</td> */}
                                        <td>
                                        <button
                                                    className="btn btn-failure btn-sm me-2"
                                                    onClick={() => deleteDoctor(doc.doctor.id)}
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Delete Doctor"
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                                <button
                                                    className="btn btn-success btn-sm me-2"
                                                    onClick={() => reinstateDoctor(doc.doctor.id)}
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Reinstate Doctor"
                                                >
                                                    <i className="fas fa-check"></i>
                                                </button>
                                        </td>
                                    </tr>
                                )) :
                                <tr>
                                    <td colSpan={5} style={{ textAlign: "center" }}>No doctors...</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>

                <div className="d-flex justify-content-end">
                    {/* <button onClick={() => { getMyPets(); getAllDoctors(); }} type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal"> */}
                        {/* <i className="fa fa-calendar-plus"></i> Book Appointment */}
                    {/* </button> */}
                </div>

           

            </div>

        </div>
    )
}