import axios from "axios";
import { GenerateUrl } from "./Common";

export async function GetMyPets(id) {

    const url = GenerateUrl(`/pet/owner/${id}`)

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