import { toast } from "react-toastify";
import { ApplicationHeader, GenerateUrl } from "./Common";
import axios from "axios";

export async function AddPetService(data) {

    const headers = ApplicationHeader();

    var response;

    const url = GenerateUrl('/pet/add')

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

    const headers = ApplicationHeader();

    console.log('token : ' + sessionStorage.getItem('token'))

    var response;

    const url = GenerateUrl('/petowner/addappointment')

    console.log(url)

    await axios.post(url, data, { headers })
        .then(res => {
            response = res
        }).catch(err => {
            // console.log("Server Is Down" + err)
            // toast.info('No ')
            toast.info('No Slot Available For This Time Try Entering Another Time')

        })

    return response;

}
