import axios from "axios";
import { GenerateUrl, ApplicationHeader } from "./Common";

console.log('In GetService');

export async function GetMyPets() {

    const url = GenerateUrl(`/petowner/pets`)

    console.log(url)

    const headers = ApplicationHeader();

    var response;

    await axios.get(url, { headers })
        .then(res => {
            response = res;
        })
        .catch(err => {
            response = err
            console.error("Error :", err)
        })

    return response

}

export async function GetPendingApprovedAppointments() {

    var response;

    const headers = ApplicationHeader();

    const path = '/petowner/appointments/pending-approved'

    const url = GenerateUrl(path)

    console.log(url)

    await axios.get(url, { headers }).then(res => {
        response = res
    }).catch(err => {
        console.log('Error : ' + err)
        response = err
    })

    return response

}

export async function GetCompletedAppointments() {

    var response;

    const headers = ApplicationHeader();

    const url = GenerateUrl('/petowner/appointments/completed')

    console.log(url)

    await axios.get(url, { headers }).then(res => {
        response = res
    }).catch(err => {
        console.log('Error : ' + err)
        response = err
    })

    return response

}

export async function GetUserProfile() {

    const headers = ApplicationHeader();

    var response

    const url = GenerateUrl('/users/profile')

    await axios.get(url, { headers })
        .then(res => {
            response = res
        })
        .catch(err => {
            response = err
        })

    return response

}

export async function GetAllPendingRequests() {

    const url = GenerateUrl('/receptionist/pendingappointments')

    const headers = ApplicationHeader();
    var response;

    console.log("Printed Headers " + headers)

    await axios.get(url, { headers })
        .then(res => {
            if (res.status)
                response = res
        })
        .catch(err => {
            console.log("Error " + err)
        })

    return response;

}

export async function GetPendingBills() {

    var response;

    const headers = ApplicationHeader();

    const url = GenerateUrl('/receptionist/getbill')

    await axios.get(url, { headers })
        .then(res => {

            response = res;
            console.log(res)

        }).catch(err => {

            response = err;
            console.log(err)

        })

    return response;

}

export async function GetAllAppointments() {

    const url = GenerateUrl('/receptionist/allappointments')

    const headers = ApplicationHeader();

    var response;

    await axios.get(url, { headers })
        .then(res => {
            response = res;
        }).catch(err => {
            console.log("Error : " + err)
        })

    return response;

}

export async function GetTodaysAppointments() {

    const url = GenerateUrl('/doctor/todaysappts')

    const headers = ApplicationHeader();

    var response;

    await axios.get(url, { headers })
        .then(res => {
            if (res !== undefined)
                response = res
        }).catch(err => {
            console.log("Error : " + err)
        })

    return response;

}

export async function GetFutureAppointments() {

    const url = GenerateUrl('/doctor/futureappts')

    const headers = ApplicationHeader();

    var response;


    await axios.get(url, { headers })
        .then(res => {
            response = res;
        }).catch(err => {
            console.log("Error : " + err)
        })

    return response;

}

export async function GetPetPrescription(id) {

    const headers = ApplicationHeader();

    const url = GenerateUrl(`/doctor/prescription/${id}`)

    var response;

    console.log(url)

    await axios.get(url, { headers })
        .then(res => {
            response = res;
            console.log(res)
        }).catch(err => {
            console.log("Error : " + err)
        })

    return response;

}