import { toast } from "react-toastify";
import { GenerateUrl } from "./Common";
import axios from "axios";

export async function AddPetService(data) {

    const path = '/pet/add'

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }

    var response;

    const url = GenerateUrl(path)

    console.log(url)

    console.log(typeof (data.ownerId) + " in AddPetService")

    await axios.post(url, data, { headers })
        .then(res => {
            response = res;
        }).catch(err => {
            console.log('Server Is Down!' + err)
            toast.info('Server not responding')
        })

    return response;


}

export async function BookAppointmentService(data) {

    const path = '/petowner/addAppointment'

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }

    console.log('token : '+ sessionStorage.getItem('token'))

    var response;

    const url = GenerateUrl(path)

    console.log(url)

    await axios.post(url, data , {headers})
        .then(res => {
            response = res
        }).catch(err => {
            console.log("Server Is Down"+ err)
            toast.info('Server not responding')
        })

    return response;

}