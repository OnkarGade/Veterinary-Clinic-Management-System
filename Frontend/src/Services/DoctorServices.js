import axios from "axios";
import { GenerateUrl } from "./Common";

export async function GetDoctorsList(data) {

    const path = ''

    const url = GenerateUrl(path)

    await axios(url, data)
        .then(response => {
            return response.data
        }
        ).catch( error=>{
            console.error("Error : ", error)
        }
        )

}