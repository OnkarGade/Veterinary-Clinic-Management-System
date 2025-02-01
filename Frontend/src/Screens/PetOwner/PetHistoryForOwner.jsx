import { DocNavbar } from '../../Components/DocNavbar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { PetOwnerNavbar } from './../../Components/PetOwnerNavbar';

export function PetHistoryForOwner() {

    const [petHistory, setPetHistory] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/pethistory")
            .then(response => {
                setPetHistory(response.data)
            })
            .catch(error => {
                console.log("Error in fetching pet history: ", error)
            })
    }, []);

    return (
        <div className='container-fluid'>
            <PetOwnerNavbar />

            <div className="container">
                <div className="text-center mt-4"><span className="fw-bolder fs-3">Pet History</span></div>
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

                            {petHistory.length > 0 ?
                                petHistory.map((pet, index) => (
                                    <tr key={index}>
                                        <td>{pet.consultationDate}</td>
                                        <td>{pet.ownerName}</td>
                                        <td>{pet.petName}</td>
                                        <td>{pet.petSpecies}</td>
                                        <td>{pet.petBreed}</td>
                                        <td>{pet.diagnosis}</td>
                                        <td>{pet.prescription}</td>
                                    </tr>
                                ))
                                : <tr>
                                    <td colSpan="7" className='text-center'>No records found</td>
                                </tr>
                            }


                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}