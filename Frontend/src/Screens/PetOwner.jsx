import { useEffect, useState } from "react";
import { PetOwnerNavbar } from "../Components/PetOwnerNavbar";
import { AddPetService } from "../Services/AddServices";
import { toast } from "react-toastify";
import { GetMyPets } from "../Services/GetServices";

export function PetOwner() {

    // State to store form inputs
    const [pet, setPet] = useState({
        ownerId: 1,
        species: '',
        breed: '',
        name: '',
        age: '',
        gender: ''
    });

    const [yourPets, setYourPets] = useState([])

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

    const getMyPets = async () => {

        await GetMyPets()
            .then(response => {
                setYourPets(response.data)
            })
            .catch(error => {
                console.log("Error in fetching your pet: ", error)
            })

    }

    useEffect(() => {

    }, [yourPets]);

    return (
        <div className="container-fluid" >
            <PetOwnerNavbar />

            <div className="container" style={{ marginTop: "120px" }}>

                <div className="container" onLoad={getMyPets}>
                    <div className="text-center mt-4"><span className="fw-bolder fs-3">Your Pets</span></div>
                    <div className='table-responsive mt-4'>

                        <table className="table table-hover table-bordered" >
                            <thead>
                                <tr>
                                    <th>Consultation Date</th>
                                    <th>Owner Name</th>
                                    <th>Pet Name</th>
                                    <th>Pet Species</th>
                                    <th>Pet Breed</th>
                                    <th>Diagnosis</th>
                                    <th>Prescription</th>
                                </tr>

                            </thead>
                            <tbody>

                                {yourPets.length > 0 ?
                                    yourPets.map((pet, index) => {
                                        return (<tr key={index}>
                                            <td>{pet.petName}</td>
                                            <td>{pet.petSpecies}</td>
                                            <td>{pet.petBreed}</td>
                                        </tr>)
                                    })
                                    : <tr>
                                        <td colSpan="7" className='text-center'>No pet added</td>
                                    </tr>
                                }

                            </tbody>
                        </table>

                    </div>

                    <div>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            data-bs-whatever="@mdo">Add</button>

                    </div>
                </div>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Pet Details</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>

                                    <div className="table-responsive mt-4">
                                        <table className="table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="form-floating mt-2">
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

                                                        <div className="col-md mt-2">
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

                                                {/* <tr>
                                                    <td colSpan={2}>
                                                        <div className="mt-2">
                                                            <input type="submit" value="Add your Pet" className="fs-5 btn btn-success form-control" />
                                                        </div>
                                                    </td>
                                                </tr> */}
                                            </tbody>
                                        </table>
                                    </div>

                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={handleSubmit} type="button" class="btn btn-primary" data-bs-dismiss="modal">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}