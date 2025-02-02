import { useState } from "react";
import { AdminNavbar } from "../Components/AdminNavbar";

export function Admin() {

    const [data, setData] = useState([])

    const afterLoad = async () => {

        const data = await getDoctorList()

    }

    return (
        <div onLoad={afterLoad} className="container-fluid">

            <AdminNavbar />

            <div className="container" style={{marginTop:"120px"}}>

            </div>

        </div>
    );

}