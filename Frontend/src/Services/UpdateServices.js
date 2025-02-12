import axios from "axios"
import { GenerateUrl, MultipartHeader } from "./Common"

var response;


export async function UpdatePetOwnerProfile(data, id) {

    const headers = MultipartHeader();

    const url = GenerateUrl(`/petowner/${id}`)

    await axios.put(url, data, { headers }).then(res => {
        response = res
    }).catch(err => {
        console.error("Error : " + err);
        response = err
    })

    return response;

}

export async function UpdateReceptionistProfile(data, id) {

    const headers = MultipartHeader();

    console.log("in update " + id)

    const url = GenerateUrl(`/receptionist/${id}`)

    await axios.put(url, data, { headers }).then(res => {
        response = res
    }).catch(err => {
        console.error("Error : " + err);
        response = err
    })

    return response;

}

export async function UpdateDoctorProfile(data, id) {

    var response;

    const headers = MultipartHeader();

    const url = GenerateUrl(`/doctor/${id}`)

    await axios.put(url, data, { headers }).then(res => {
        response = res
    }).catch(err => {
        console.error("Error : " + err);
        response = err
    })

    return response;


}