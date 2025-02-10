import axios from "axios";
import { ApplicationHeader, GenerateUrl } from "./Common";

export async function ApproveAppointment(id) {

    console.log(id)


    const url = GenerateUrl(`/receptionist/approveappointment/${id}`)

    const headers = ApplicationHeader();

    console.log(url)

    var response = await axios.patch(url, {}, { headers })

    console.log(response);

    return response

}

export async function BillPaid(id) {

    const headers = ApplicationHeader();

    const url = GenerateUrl(`/receptionist/paybill/${id}`)

    console.log(id)

    var response;

    await axios.patch(url, {}, { headers })
        .then(res => {
            console.log(res)
            response = res
        }
        ).catch(err => {
            console.log('error : ' + err)
        })

    return response;

}

export async function GetListOfReceptionists() {

    const url = GenerateUrl('/admin/receptionists')

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
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

export async function DeleteReceptionist(id) {

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

export async function ReinstateReceptionist(id) {

    const url = GenerateUrl(`/admin/reinstatestaff/${id}`)

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

    return response
}
