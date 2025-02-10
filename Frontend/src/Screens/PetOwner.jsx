import { useEffect, useState } from "react";
import { PetOwnerNavbar } from "../Components/PetOwnerNavbar";
import { AddPetService } from "../Services/AddServices";
import { toast } from "react-toastify";
import { GetMyPets } from "../Services/GetServices";
import React from "react";

// redux-imports
// import { useDispatch, useSelector } from "react-redux";
// import { setPetList } from "../Features/Pet/PetSlice";

export function PetOwner() {
    const [pet, setPet] = useState({
        ownerId: sessionStorage.getItem('id'),
        species: '',
        breed: '',
        name: '',
        age: '',
        gender: ''
    });

    const [yourPets, setYourPets] = useState([]);
    const [onChangeEvent, setOnChange] = useState([]);

    // const pets = useSelector((state) => state.petStore.value);
    // const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'gender') {
            setPet(prevPet => ({ ...prevPet, [name]: value.toUpperCase() }));
        } else if (name === 'age') {
            setPet(prevPet => ({ ...prevPet, [name]: value }));
        } else {
            setPet(prevPet => ({ ...prevPet, [name]: value }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await AddPetService(pet).then(response => {
            if (response.status === 201) {
                toast.success("Pet added successfully!");
                setOnChange(response.data);
            }
        }).catch(err => {
            console.error('Error adding Pet. Please try again.', err);
        });
        handleAfterClear();
    };

    const handleAfterClear = () => {
        setPet({
            name: '',
            species: '',
            gender: '',
            breed: '',
            age: ''
        });
    };

    useEffect(() => {
        const getMyPets = async () => {
            if (sessionStorage.getItem('token') !== null) {
                await GetMyPets().then(response => {
                    console.log(response)
                    if (response !== undefined) {
                        setYourPets(response.data);
                    }
                }).catch(error => {
                    console.log("Error in fetching your pet: ", error);
                });
            }
        };
        getMyPets();
    }, [onChangeEvent]);

    return (
        <div className="container-fluid">
            <PetOwnerNavbar />

            <div className="container" style={{ marginTop: "120px" }}>
                <div className="text-center mt-4">
                    <span className="fw-bolder fs-3 text-uppercase">Your Pets</span>
                </div>

                {/* Cards Layout for Pets */}
                <div className="row mt-4">
                    {yourPets.length !== 0 ? 
                        yourPets.map((pet, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card shadow-lg border-light rounded" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{pet.name}</h5>
                                        <p className="card-text"><strong>Species:</strong> {pet.species}</p>
                                        <p className="card-text"><strong>Breed:</strong> {pet.breed}</p>
                                        <p className="card-text"><strong>Age:</strong> {pet.age}</p>
                                    </div>
                                </div>
                            </div>
                        )) :
                        <div className="col-12">
                            <div className="alert alert-info text-center">No pets added yet!</div>
                        </div>
                    }
                </div>

                <div className="text-center mt-3">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add New Pet
                    </button>
                </div>

                {/* Add Pet Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Enter Pet Details</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-floating mt-2">
                                                <input type="text" className="form-control" name="name" value={pet.name} onChange={handleChange} id="floatingName" placeholder="Enter Pet Name" required />
                                                <label htmlFor="floatingName">Pet Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mt-2">
                                                <input type="text" className="form-control" name="species" value={pet.species} onChange={handleChange} id="floatingSpecies" placeholder="Enter Pet Species" required />
                                                <label htmlFor="floatingSpecies">Pet Species</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select" name="gender" value={pet.gender} onChange={handleChange} id="floatingGender" required>
                                                    <option value="">Select Gender</option>
                                                    <option value="MALE">Male</option>
                                                    <option value="FEMALE">Female</option>
                                                    <option value="OTHER">Other</option>
                                                </select>
                                                <label htmlFor="floatingGender">Pet Gender</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="number" className="form-control" name="age" value={pet.age} onChange={handleChange} id="floatingAge" placeholder="Enter Pet Age" required />
                                                <label htmlFor="floatingAge">Age</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" name="breed" value={pet.breed} onChange={handleChange} id="floatingBreed" placeholder="Enter Pet Breed" required />
                                            <label htmlFor="floatingBreed">Pet Breed</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Add Pet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
