import { DocNavbar } from '../../Components/DocNavbar'
// import { PetOwnerNavbar } from '../../Components/PetOwnerNavbar'

export function PetHistory() {
    return (
        <div className='container-fluid'>
            <DocNavbar />

            <div className="container">
                <div className="text-center mt-4"><span className="fw-bolder fs-3">Pet History</span></div>
                <div className='table-responsive mt-4'>

                    <table class="table table-hover table-bordered" >
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
                            <tr>
                                <td>Id1</td>
                                <td>Id2</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>Id3</td>
                            </tr>
                            <tr>
                                <td>Id1</td>
                                <td>Id2</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>Id3</td>
                            </tr>
                            <tr>
                                <td>Id1</td>
                                <td>Id2</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>Id3</td>
                            </tr>
                            <tr>
                                <td>Id1</td>
                                <td>Id2</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td>Id3</td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>



        </div>
    )
}