import axios from "axios";
import { GenerateUrl } from "./Common";

export async function RegisterService(data) {

    const path = `/user/register`

    const url = GenerateUrl(path)

    var response;

    console.log(url)

    await axios.post(url, data)
        .then(res => {
            response = res;
        })
        .catch(error=>{
            console.error("Error :", error);
        })

        return response;

}