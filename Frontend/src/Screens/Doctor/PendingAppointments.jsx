import { DocNavbar } from './../../Components/DocNavbar';
import { Link } from 'react-router-dom';

export function PendingAppointments() {
    return (
        <div className='container-fluid'>
            <DocNavbar />

            <div className="container" style={{marginTop:"120px"}}>
                <div className="text-center mt-4"><span className="fw-bolder fs-3">Pending Appointment's</span></div>

                <div className='table-responsive mt-4'>

                    <table class="table table-hover table-bordered">
                        <thead>
                            <tr border>
                                <th >Date</th>
                                <th>Owner Id</th>
                                <th >Owner Name</th>
                                <th >Pet Breed</th>
                                <th>Pet History</th>
                                <th>Attend</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>Id1</td>
                                <td>Id2</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td><Link to="/history" className="btn btn-primary">Click Here</Link></td>
                                <td><Link to="/history" className="btn btn-primary">Click Here</Link></td>
                            </tr>
                            <tr>
                                <td>Id1</td>
                                <td>Id2</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td><Link to="/history" className="btn btn-primary">Click Here</Link></td>
                                <td><Link to="/history" className="btn btn-primary">Click Here</Link></td>
                            </tr>
                            <tr>
                                <td>Id1</td>
                                <td>Id2</td>
                                <td>Id3</td>
                                <td>Id3</td>
                                <td><Link to="/history" className="btn btn-primary">Click Here</Link></td>
                                <td><Link to="/history" className="btn btn-primary">Click Here</Link></td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>


        </div>
    );
}
