import axios from "axios";
import { GenerateUrl } from "./Common";

export async function LoginService(data) {

    var response_data;
    const url = GenerateUrl(`/users/signin`)

    await axios.post(url, data)
        .then(response => {
            console.log(response);  
            response_data = response.data
        }).catch(error => {
            console.error("Error : ", error)
        })

    console.log(response_data)

    return response_data;

}