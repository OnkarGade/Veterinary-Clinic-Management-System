import axios from "axios";
import { ApplicationHeader, GenerateUrl } from "./Common";

export async function GetDoctorsList() {

    var response;

    const headers = ApplicationHeader();

    const url = GenerateUrl('/petowner/availabledoctors')

    console.log(url)

    await axios.get(url, { headers })
        .then(res => {
            response = res
        }).catch(error => {
            console.error("Error : ", error)
        })

    return response

}

export async function AddPrescription(data) {

    const headers = ApplicationHeader();

    const url = GenerateUrl('/doctor/addPrescription')

    var response;

    console.log(url)

    await axios.post(url, data, { headers }).then(res => {
        console.log(res.data)
        response = res
    }).catch(err => {
        console.log(err)
    })

    return response;

}

export async function GetListOfDoctors() {

    const url = GenerateUrl('/admin/doctors')

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')
            }`
    }

    var response;

    await axios.get(url, { headers })
        .then(res => {
            response = res;
        }).catch(err => {
            console.log("Error : " + err)
        })

    return response;
}


export async function DeleteDoctor(id) {

    const url = GenerateUrl(`/admin/deletestaff/${id}`)

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')
            }`
    }

    var response;

    await axios.patch(url, {}, { headers })
        .then(res => {
            response = res;
        }).catch(err => {
            console.log("Error : " + err)
        })

    return response;
}

export async function ReinstateDoctor(id) {

    const url = GenerateUrl(`/admin/reinstatestaff/${ id }`)

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }

    var response;

    await axios.patch(url, {}, { headers })
        .then(res => {
            response = res;
        }).catch(err => {
            console.log("Error : " + err)
        })

    return response;
}
