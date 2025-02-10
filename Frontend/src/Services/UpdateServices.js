import axios from "axios"
import { GenerateUrl } from "./Common"

var response;


export async function UpdatePetOwnerProfile(data, id) {

    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    };

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

    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    };

    console.log("in update "+id)

    const url = GenerateUrl(`/receptionist/${id}`)

    await axios.put(url, data, { headers }).then(res => {
        response = res
    }).catch(err => {
        console.error("Error : " + err);
        response = err
    })

    return response;

}