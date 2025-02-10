import { useEffect, useState } from "react";
import { ReceptionistNavbar } from "../../Components/ReceptionistNavbar";
import { useSelector } from "react-redux";
// import { GetPendingBills } from "../../Services/GetServices"; // Uncomment and import your service to fetch pending bills

export function BillsHistory() {

    const [billsHistory, setBillsHistory] = useState([]);

    const bills = useSelector((state) => state.billDetails.bills)

    useEffect(() => {

        console.log(bills)
        setBillsHistory(bills)

    }, [bills]);

    return (
        <div className="container-fluid" style={{ marginTop: "120px" }}>
            <ReceptionistNavbar />
            <div className="container mt-5">
                <div className="table-responsive">
                    <table className="table table-hover table-bordered shadow-sm">
                        {/* Adding the shadow class to the table */}
                        <thead className="table-primary">
                            <tr>
                                <th>No.</th>
                                <th>Bill ID</th>
                                <th>Owner Name</th>
                                <th>Amount</th>
                                {/* <th>Due Date</th> */}
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {billsHistory.length !== 0 ? (
                                billsHistory.map((bill, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{bill.billId}</td>
                                        <td>{bill.ownerName}</td>
                                        <td>{bill.amount}</td>
                                        <td>{bill.status}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary btn-sm me-2"
                                                onClick={() => { /* View Bill Logic */ }}
                                            >
                                                View
                                            </button>
                                            <button
                                                className="btn btn-success btn-sm me-2"
                                                onClick={() => { /* Pay Bill Logic */ }}
                                            >
                                                Pay
                                            </button>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => { /* Cancel Bill Logic */ }}
                                            >
                                                Cancel
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="text-center">
                                    <div>No Bills History</div>
                                    <div className="text-muted">You haven't had any completed Bill yet.</div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
