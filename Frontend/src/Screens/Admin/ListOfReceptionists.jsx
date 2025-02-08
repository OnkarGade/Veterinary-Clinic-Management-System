import { useEffect } from "react";
import { toast } from "react-toastify";
import { AdminNavbar } from '../../Components/AdminNavbar';
import { DeleteDoctor, DeleteReceptionist, GetListOfDoctors, GetListOfReceptionists, ReinstateDoctor, ReinstateReceptionist } from "../../Services/GetServices";
import { useState } from "react";

export function ListOfReceptionists(){

    const [receptionists, setReceptionists] = useState([]);
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

    const getListOfReceptionists = async () => {
        // setLoading(true); // Start loading
        // console.log(doctor.firstName)
        try {
            var response = await GetListOfReceptionists()

            console.log(response)
            
            if (response?.data) {
                setReceptionists(response.data)

                // var dbImage = response.data.doctor.image
                // // Handle base64 format, if necessary
                
                // if (dbImage.startsWith("data:image")) {
                //     setImage(dbImage);
                // } else {
                //     // Assuming it's a blob or accessible URL
                //     setImage(`data:image/jpeg;base64,${dbImage}`);
                // }

            } else {
                toast.info("No Receptionists available.");
            }
        } catch (err) {
            console.error("Error fetching list of Receptionists :", err);
            // toast.error("Failed to load list of receptionists.");
        } finally {
            setLoading(false); // End loading
        }

    }

        // Handle doctor delete approval
        const deleteReceptionist = async (userId) => {
    
            console.log(userId)
    
            await DeleteReceptionist(userId)
                .then(res => {
                    if (res?.status) {
                        toast.success(`Receptionist deleted`); // Temporary success message
                    } else {
                        console.log(res)
                    }
                }).catch(err => {
                    console.log(err)
                })
    
            // Implement the approve logic (using your API service)
            GetListOfReceptionists(); // Refresh list
        };

              // Handle doctor delete approval
              const reinstateReceptionist = async (userId) => {
    
                console.log(userId)
        
                await ReinstateReceptionist(userId)
                    .then(res => {
                        if (res?.status) {
                            toast.success(`Receptionist reinstated.`); // Temporary success message
                        } else {
                            console.log(res)
                        }
                    }).catch(err => {
                        console.log(err)
                    })
        
                // Implement the approve logic (using your API service)
                GetListOfReceptionists(); // Refresh list
            };


    // Fetch data from backend using Axios
    useEffect(() => {

        getListOfReceptionists();

    }, []);


    return(
        <div className="container-fluid">
            <AdminNavbar />

            <div className="container mt-4">
                <div className="text-center mb-4">
                    <span className="fw-bolder fs-3">Receptionist List</span>
                </div>

                <div className="table-responsive mb-4">
                    <table className="table table-hover table-bordered shadow-sm">
                        <thead className="table-primary">
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Phone No.</th>
                                <th>Qualification</th>
                                {/* <th>Image</th> */}
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receptionists.length !== 0 ?
                                receptionists.map((recep, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{recep.receptionist.firstName} {recep.receptionist.lastName}</td>
                                        <td>{recep.receptionist.email}</td>
                                        <td>{recep.receptionist.gender}</td>
                                        <td>{recep.receptionist.phoneNo}</td>
                                        <td>{recep.qualification}</td>
                                        <td>{recep.receptionist.active === false?`Not Active`:`Active`}</td>
                                        {/* <td>{image}</td> */}
                                        <td>
                                        <button
                                                    className="btn btn-failure btn-sm me-2"
                                                    onClick={() => deleteReceptionist(recep.receptionist.id)}
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Delete Receptionist"
                                                >
                                                    <i className="fas fa-check"></i>
                                                </button>
                                                <button
                                                    className="btn btn-success btn-sm me-2"
                                                    onClick={() => reinstateReceptionist(recep.receptionist.id)}
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Reinstate Receptionist"
                                                >
                                                    <i className="fas fa-check"></i>
                                                </button>
                                        </td>
                                    </tr>
                                )) :
                                <tr>
                                    <td colSpan={5} style={{ textAlign: "center" }}>No Receptionists...</td>
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