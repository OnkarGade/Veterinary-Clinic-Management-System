import { PetOwnerNavbar } from "../../Components/PetOwnerNavbar";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export function YourPets() {

    const [yourpets, setYourpets] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/yourpets")
            .then(response => {
                setYourpets(response.data)
            })
            .catch(error => {
                console.log("Error in fetching your pet: ", error)
            })
    }, []);

    return (
        <div className="container-fluid">
            <PetOwnerNavbar />

            <div className="container">
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

                            {yourpets.length > 0 ?
                                yourpets.map((pet, index) => (
                                    <tr key={index}>
                                        <td>{pet.petName}</td>
                                        <td>{pet.petSpecies}</td>
                                        <td>{pet.petBreed}</td>
                                    </tr>
                                ))
                                : <tr>
                                    <td colSpan="7" className='text-center'>No pet added</td>
                                </tr>
                            }

                        </tbody>
                    </table>

                </div>
            </div>


        </div>
    )
}