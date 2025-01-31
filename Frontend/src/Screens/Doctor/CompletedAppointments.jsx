import { DocNavbar } from './../../Components/DocNavbar';
import { Link } from 'react-router-dom';

export function CompletedAppointments() {
    return (
        <div className='container-fluid'>
            <DocNavbar />

            <div className="container">
                <div className="text-center mt-4"><span className="fw-bolder fs-3">Completed Appointment's</span></div>
                <div>
                    <div className='table-responsive mt-4'>

                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Owner Id</th>
                                    <th>Owner Name</th>
                                    <th>Pet Id</th>
                                    <th>Pet History</th>
                                    <th>Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>Id1</td>
                                    <td>Id2</td>
                                    <td>Id3</td>
                                    <td><Link to="/history" className="btn btn-primary">Click Here</Link></td>
                                    <td><Link to="/prescribe" className="btn btn-success">Attend</Link></td>
                                </tr>
                                <tr>
                                    <td>Id1</td>
                                    <td>Id2</td>
                                    <td>Id3</td>
                                    <td><Link to="/history" className="btn btn-primary">Click Here</Link></td>
                                    <td><Link to="/prescribe" className="btn btn-success">Attend</Link></td>
                                </tr>
                                <tr>
                                    <td>Id1</td>
                                    <td>Id2</td>
                                    <td>Id3</td>
                                    <td><Link to="/history" className="btn btn-primary">Click Here</Link></td>
                                    <td><Link to="/prescribe" className="btn btn-success">Attend</Link></td>
                                </tr>

                            </tbody>
                        </table>

                    </div>


                </div>
            </div>

        </div>
    );
}
