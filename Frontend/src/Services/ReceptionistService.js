import axios from "axios";
import { GenerateUrl } from "./Common";

export async function ApproveAppointment(id) {

    console.log(id)

    
    const url = GenerateUrl(`/receptionist/approveappointment/${id}`)
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }
    
    // console.log(sessionStorage.getItem('token'))

    console.log(url)

    var response = await axios.patch(url, { headers })

    console.log(response);

    return response

}