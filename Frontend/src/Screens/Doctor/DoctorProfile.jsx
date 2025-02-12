import { useEffect, useState } from "react";
import { GetUserProfile } from "../../Services/GetServices";
import { UpdateDoctorProfile } from "../../Services/UpdateServices";
import { toast } from "react-toastify";
import { DocNavbar } from "../../Components/DocNavbar";

export function DoctorProfile() {
    const [imageFile, setImageFile] = useState(null); // Store the file
    const [previewImage, setPreviewImage] = useState(null); // Store preview URL
    const [userDetails, setUserDetails] = useState({});
    const [id, setId] = useState(0)


    // Handle updating the profile picture
    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file); // Set the file for uploading
            setPreviewImage(URL.createObjectURL(file)); // Create a preview URL
        }
    };

    // Handle updating other form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // const InitializeStates = () => {
    //     setPreviewImage(null); // Reset the preview URL
    //     setImageFile(null); // Reset file state
    // };

    // Handle form submission for updating user profile
    const handleSaveChanges = async () => {
        const tempUser = {
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            dob: userDetails.dob,
            email: userDetails.email,
            phoneNo: userDetails.phoneNo,
            address: userDetails.address,
        };

        const formData = new FormData();
        formData.append("userReqDto", JSON.stringify(tempUser));

        if (imageFile) {
            formData.append("imageFile", imageFile); // Append the file
        }

        try {
            const res = await UpdateDoctorProfile(formData, id);
            if (res !== undefined) {
                toast.success("Profile Updated");
            } else {
                toast.info("Something Went Wrong");
            }
        } catch (err) {
            console.error("Error:", err);
        }
    };

    const getUserDetails = async () => {
        try {
            const res = await GetUserProfile();
            console.log(res)
            setUserDetails(res.data.object.doctor);
            setId(res.data.object.id)

            // Set image directly if coming from database in proper format
            if (res.data.object.doctor.image) {
                const dbImage = res.data.object.doctor.image;

                // Handle base64 format, if necessary
                if (dbImage.startsWith("data:image")) {
                    setPreviewImage(dbImage);
                } else {
                    // Assuming it's a blob or accessible URL
                    setPreviewImage(`data:image/jpeg;base64,${dbImage}`);
                }
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getUserDetails();
    }, []);

    return (
        <div className="container-fluid" style={{ marginTop: "120px" }}>
            <DocNavbar />

            <div className="container mt-5 d-flex justify-content-center">
                <div className="card shadow-lg" style={{ width: "60%" }}>
                    {/* Header */}
                    <div
                        className="card-header text-center text-white"
                        style={{ backgroundColor: "#007bff" }}
                    >
                        <h3>User Profile</h3>
                    </div>

                    {/* Profile Picture and Basic Info */}
                    <div className="card-body text-center">
                        <img
                            src={previewImage} // Use preview image directly
                            alt="User"
                            className="rounded-circle mb-3"
                            style={{ width: "120px", height: "120px", objectFit: "cover" }}
                        />
                        <h4>
                            {userDetails.firstName} {userDetails.lastName}
                        </h4>
                        <p className="text-muted">{userDetails.email}</p>
                    </div>

                    {/* User Details */}
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <strong>First Name</strong>
                                <p className="text-muted">{userDetails.firstName}</p>
                            </div>
                            <div className="col-md-6">
                                <strong>Last Name</strong>
                                <p className="text-muted">{userDetails.lastName}</p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <strong>Email</strong>
                                <p className="text-muted">{userDetails.email}</p>
                            </div>
                            <div className="col-md-6">
                                <strong>Date of Birth</strong>
                                <p className="text-muted">{userDetails.dob}</p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <strong>Phone No</strong>
                                <p className="text-muted">{userDetails.phoneNo}</p>
                            </div>
                            <div className="col-md-6">
                                <strong>Address</strong>
                                <p className="text-muted">{userDetails.address}</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="card-footer text-center">
                        <button
                            className="btn btn-primary mx-2"
                            data-bs-toggle="modal"
                            data-bs-target="#editProfileModal"
                            // onClick={InitializeStates}
                        >
                            Edit Profile
                        </button>
                        {/* <button className="btn btn-danger mx-2">Delete Account</button> */}
                    </div>
                </div>

                {/* Edit Profile Modal */}
                <div
                    className="modal fade"
                    id="editProfileModal"
                    tabIndex="-1"
                    aria-labelledby="editProfileModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="editProfileModalLabel">
                                    Edit Profile
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3 text-center">
                                    <label className="form-label">Profile Picture</label>
                                    <div className="input-group">
                                        <input
                                            onChange={handleProfilePicChange}
                                            type="file"
                                            className="form-control"
                                            id="inputGroupFile02"
                                        />
                                    </div>
                                    <img
                                        src={previewImage} // Display the image from database or preview
                                        alt="Preview"
                                        className="rounded-circle mt-3"
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>

                                {/* Form Fields in a Table */}
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-floating">
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        className="form-control"
                                                        value={userDetails.firstName}
                                                        name="firstName"
                                                    />
                                                    <label>First Name</label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        className="form-control"
                                                        value={userDetails.lastName}
                                                        name="lastName"
                                                    />
                                                    <label>Last Name</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-floating">
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        className="form-control"
                                                        value={userDetails.email}
                                                        name="email"
                                                   readOnly  />
                                                    <label>Email</label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input
                                                        onChange={handleChange}
                                                        type="date"
                                                        className="form-control"
                                                        value={userDetails.dob}
                                                        name="dob"
                                                    />
                                                    <label>Date of Birth</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-floating">
                                                    <input
                                                        onChange={handleChange}
                                                        type="tel"
                                                        className="form-control"
                                                        value={userDetails.phoneNo}
                                                        name="phoneNo"
                                                    />
                                                    <label>Phone No</label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-floating">
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        className="form-control"
                                                        value={userDetails.address}
                                                        name="address"
                                                    />
                                                    <label>Address</label>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleSaveChanges}
                                    data-bs-dismiss="modal"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
