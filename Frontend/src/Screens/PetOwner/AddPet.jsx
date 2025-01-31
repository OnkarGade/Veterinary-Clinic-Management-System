import { PetOwnerNavbar } from '../../Components/PetOwnerNavbar'

export function AddPet() {
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
                            {/* <form action="/submit" method="post"> */}

                            <div className="table-responsive mt-4">
                                <table className="table table-borderless">

                                    <tr>
                                        <td>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingName" placeholder="Enter Pet Name" required=" " />
                                                <label for="floatingInput">Pet Name</label>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="form-floating mt-2">
                                                <input type="text" class="form-control" id="floatingSpecies" placeholder="Enter Pet Species" required=" " />
                                                <label for="floatingInput">Pet Species</label>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>

                                            <div class="col-md">
                                                <div class="form-floating">
                                                    <select class="form-select" id="floatingSelectGrid">
                                                        <option selected>Select Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="unsure">Unsure</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Pet Gender</label>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-floating mt-2">
                                                <input type="number" class="form-control" id="floatingAge" min={0} max={30} placeholder="Enter Pet Age" required=" " />
                                                <label for="floatingInput">Pet Age</label>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td colSpan={2}>
                                            <div class="form-floating mt-2">
                                                <input type="text" class="form-control" id="floatingBreed" placeholder="Enter Pet Breed" required=" " />
                                                <label for="floatingInput">Pet Breed</label>
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

                                </table>
                            </div>

                            {/* </form> */}
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>



        </div>
    )
}