import axios from "axios";
import { GenerateUrl } from "./Common";

export async function GetMyPets() {

    const url = GenerateUrl('/yourpets')

    var response;

    await axios.get(url)
        .then(res => {
            response = res;
        })
        .catch(err => {
            console.error("Error :", err)
        })

    return response.data

}