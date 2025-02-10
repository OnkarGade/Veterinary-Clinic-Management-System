import axios from "axios";
import { GenerateUrl } from "./Common";

export async function GetDoctorsList() {

    const path = '/petowner/availabledoctor'

    var response;

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }


    const url = GenerateUrl(path)

    console.log(url)

    await axios.get(url, { headers })
        .then(res => {
            response = res
        }).catch(error => {
            console.error("Error : ", error)
        })

    return response

}