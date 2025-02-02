import { toast } from "react-toastify";
import { GenerateUrl } from "./Common";
import axios from "axios";

export async function AddPetService(data) {

    const path = '/pet/add'

    var response;

    const url = GenerateUrl(path)

    await axios.post(url, data)
        .then(res => {
            response = res;
        }).catch(err=>{
            console.log('Server Is Down')
            toast.info('Server is down')
        })

    return response;


}

export async function BookAppointmentService(data) {

    const path = '/pet/appointment'

    var response;

    const url = GenerateUrl(path)

    await axios.post(url, data)
    .then(res=>{
        response = res
    }).catch(err=>{
        console.log("Server Is Down")
        toast.info('Server is down')
    })
    
    return response;

}