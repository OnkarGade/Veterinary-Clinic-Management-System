import axios from "axios";
import { ApplicationHeader, GenerateUrl } from "./Common";

export async function DeletePet(pid) {

    var response;

    const headers = ApplicationHeader()


    const url = GenerateUrl(`/pet/delete/${pid}`)

    console.log(url)

    await axios.patch(url, {}, { headers })
        .then(res => {
            response = res
        }).catch(error => {
            console.error("Error : ", error)
        })

    return response

}

export async function DenyAppointment(id) {

    const headers = ApplicationHeader();

    const url = GenerateUrl(`/receptionist/denieappointment/${id}`)

    console.log(url)

    var response;

    await axios.patch(url, {}, { headers }).then(res => {
        response = res;
    }).catch(err => {
        console.log('Error : ' + err)
    })

    return response;

}