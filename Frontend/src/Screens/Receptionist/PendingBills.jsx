import { useEffect, useState } from "react";
import { ReceptionistNavbar } from "../../Components/ReceptionistNavbar";
// import { useDispatch, useSelector } from "react-redux";
import { BillPaid } from "../../Services/ReceptionistService";
import { GetPendingBills } from "../../Services/GetServices";

export function PendingBills() {

    const [pendingBills, setPendingBills] = useState([]);

    // const bills = useSelector((state) => state.billDetails.bills);

    const afterPay = async (id) => {

        var res = await BillPaid(id)

        if (res?.status) {
            if (res.status) {
                console.log(res.status)
            }
        }

        fetchPendingBills();

    }

    const fetchPendingBills = async () => {

        await GetPendingBills()
            .then(res => {
                console.log(res)
                if (res !== undefined) {
                    setPendingBills(res.data)
                }
            })
            .catch(err => {
                console.log(err)
            })

    }

    const afterCancel = async () => {

    }

    useEffect(() => {
        fetchPendingBills();
    }, []);

    return (
        <div className="container-fluid" style={{ marginTop: "120px" }}>
            <ReceptionistNavbar />
            <div className="container mt-5">
                <div className="table-responsive text-center">
                    <table className="table table-hover table-bordered shadow-sm">
                        {/* Adding the shadow class to the table */}
                        <thead className="table-primary">
                            <tr>
                                <th>No.</th>
                                <th>Owner Name</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingBills.length !== 0 ? (
                                pendingBills.map((bill, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{bill.petOwnerResDto2.owner.firstName} {bill.petOwnerResDto2.owner.lastName}</td>
                                        <td>{bill.totalAmount}</td>
                                        <td style={{ width: "130px" }}>
                                            <button
                                                className="btn btn-success btn-sm me-2"
                                                onClick={() => afterPay(bill.id)}
                                            >
                                                Paid
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="text-center">
                                        <div>No Pending Bills</div>
                                        <div className="text-muted">You haven't had any Pending Bill yet.</div>
                                    </td>
                                </tr>
                            )}

                            {/* {bills.length !== 0 ? <tr><td colSpan={7}>{bills.length}</td></tr> : <tr><td colSpan={7}>No Data In Bills </td></tr>} */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
