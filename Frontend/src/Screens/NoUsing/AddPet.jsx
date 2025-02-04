import { useState } from 'react';
import { PetOwnerNavbar } from '../../Components/PetOwnerNavbar'
import { toast } from 'react-toastify';
import { AddPetService } from '../../Services/AddServices';

export function AddPet() {

    // State to store form inputs
    const [pet, setPet] = useState({
        ownerId: 1,
        species: '',
        breed: '',
        name: '',
        age: '',
        gender: ''
    });

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'gender') {
            // Convert gender to uppercase
            setPet(prevPet => ({ ...prevPet, [name]: value.toUpperCase() }));
        } else if (name === 'age') {
            // Ensure age is an integer
            setPet(prevPet => ({ ...prevPet, [name]: parseInt(value, 10) }));
        } else {
            setPet(prevPet => ({ ...prevPet, [name]: value }));
        }
    };


    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Sending data to the backend API
            await AddPetService(pet).then(

                toast.success("Pet added successfully!")
            ).catch(

                toast.error('Error adding Pet. Please try again.')
            )
            // Show success toast
            // Clear form fields after successful submission
            setPet({
                ownerId: pet.ownerId,
                name: '',
                species: '',
                gender: '',
                age: '',
                breed: ''
            });
        } catch (error) {
            console.error('Error adding pet', error);
        }
    };

    return (
        <div className='container-fluid'>
            <PetOwnerNavbar />

            <div className="row">
                <div className="col"></div>
                <div className="col-7">
                    <div className="container">
                        <div className="mt-4" style={{ textAlign: "center" }}>
                            <span className="fw-bolder fs-3">Add Pet</span>
                        </div>
                        <div className="content">
                            {/* form */}
                            <form onSubmit={handleSubmit}>

                                <div className="table-responsive mt-4">
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" name="name" value={pet.name} onChange={handleChange} id="floatingName" placeholder="Enter Pet Name" required=" " />
                                                        <label htmlFor="floatingInput">Pet Name</label>
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="form-floating mt-2">
                                                        <input type="text" className="form-control" name="species" value={pet.species} onChange={handleChange} id="floatingSpecies" placeholder="Enter Pet Species" required=" " />
                                                        <label htmlFor="floatingInput">Pet Species</label>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>

                                                    <div className="col-md">
                                                        <div className="form-floating">
                                                            <select className="form-select" name="gender" value={pet.gender} onChange={handleChange} id="floatingSelectGrid">
                                                                <option value="">Select Gender</option>
                                                                <option value="MALE">Male</option>
                                                                <option value="FEMALE">Female</option>
                                                                <option value="">Unsure</option>
                                                            </select>
                                                            <label htmlFor="floatingSelectGrid">Pet Gender</label>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="form-floating mt-2">
                                                        <input type="number" className="form-control" name="age" value={pet.age} onChange={handleChange} id="floatingAge" min={0} max={30} placeholder="Enter Pet Age" required=" " />
                                                        <label htmlFor="floatingInput">Pet Age</label>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colSpan={2}>
                                                    <div className="form-floating mt-2">
                                                        <input type="text" className="form-control" name="breed" value={pet.breed} onChange={handleChange} id="floatingBreed" placeholder="Enter Pet Breed" required=" " />
                                                        <label htmlFor="floatingInput">Pet Breed</label>
                                                    </div>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td colSpan={2}>
                                                    <div className="mt-2">
                                                        <input type="submit" value="Add your Pet" className="fs-5 btn btn-success form-control" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>



        </div>

    )

    // return (
    //     <div className='container-fluid'>
    //         <PetOwnerNavbar />

    //         <div className="row">
    //             <div className="col"></div>
    //             <div className="col-7">
    //                 <div className="container">
    //                     <div className="mt-4" style={{ textAlign: "center" }}>
    //                         <span className="fw-bolder fs-3">Add Pet</span>
    //                     </div>
    //                     <div className="content">
    //                         {/* <form action="/submit" method="post"> */}

    //                         <div className="table-responsive mt-4">
    //                             <table className="table table-borderless">

    //                                 <tr>
    //                                     <td>
    //                                         <div className="form-floating">
    //                                             <input type="text" className="form-control" id="floatingName" placeholder="Enter Pet Name" required=" " />
    //                                             <label htmlFor="floatingInput">Pet Name</label>
    //                                         </div>
    //                                     </td>

    //                                     <td>
    //                                         <div className="form-floating mt-2">
    //                                             <input type="text" className="form-control" id="floatingSpecies" placeholder="Enter Pet Species" required=" " />
    //                                             <label htmlFor="floatingInput">Pet Species</label>
    //                                         </div>
    //                                     </td>

    //                                 </tr>
    //                                 <tr>
    //                                     <td>

    //                                         <div className="col-md">
    //                                             <div className="form-floating">
    //                                                 <select className="form-select" id="floatingSelectGrid">
    //                                                     <option selected>Select Gender</option>
    //                                                     <option value="male">Male</option>
    //                                                     <option value="female">Female</option>
    //                                                     <option value="unsure">Unsure</option>
    //                                                 </select>
    //                                                 <label htmlFor="floatingSelectGrid">Pet Gender</label>
    //                                             </div>
    //                                         </div>
    //                                     </td>
    //                                     <td>
    //                                         <div className="form-floating mt-2">
    //                                             <input type="number" className="form-control" id="floatingAge" min={0} max={30} placeholder="Enter Pet Age" required=" " />
    //                                             <label htmlFor="floatingInput">Pet Age</label>
    //                                         </div>
    //                                     </td>
    //                                 </tr>

    //                                 <tr>
    //                                     <td colSpan={2}>
    //                                         <div className="form-floating mt-2">
    //                                             <input type="text" className="form-control" id="floatingBreed" placeholder="Enter Pet Breed" required=" " />
    //                                             <label htmlFor="floatingInput">Pet Breed</label>
    //                                         </div>
    //                                     </td>

    //                                 </tr>

    //                                 <tr>
    //                                     <td colSpan={2}>
    //                                         <div className="mt-2">
    //                                             <input type="submit" value="Add your Pet" className="fs-5 btn btn-success form-control" />
    //                                         </div>
    //                                     </td>
    //                                 </tr>

    //                             </table>
    //                         </div>

    //                         {/* </form> */}
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col"></div>
    //         </div>



    //     </div>
    // )
}