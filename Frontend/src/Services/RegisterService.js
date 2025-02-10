import axios from "axios";
import { GenerateUrl } from "./Common";

export async function RegisterService(data) {

    const path = `/users/register`

    const url = GenerateUrl(path)

    var response;

    console.log(url)

    await axios.post(url, data)
        .then(res => {
            response = res;
        })
        .catch(error=>{
            console.error("Error :", error);
            response = error
        })

        return response;

}

export async function RegisterStaffService(data) {

    const path = `/admin/registerstaff`

    const url = GenerateUrl(path)

    var response;

    console.log(url)

    await axios.post(url, data)
        .then(res => {
            response = res;
        })
        .catch(error=>{
            console.error("Error :", error);
            response = error
        })

        return response;

}