// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css'
import { Route, Routes } from 'react-router-dom'
import { Doctor } from './Screens/Doctor'
import { PetOwner } from './Screens/PetOwner';
import { Receptionist } from './Screens/Receptionist';
import { Login } from './Screens/Login';
import { AddAppointment } from './Screens/Receptionist/AddAppointment';
import { AdminNavbar } from './Components/AdminNavbar';
import { AddStaff } from './Screens/Admin/AddStaff';
import { CompletedAppointments } from './Screens/Doctor/CompletedAppointments';
import { PendingAppointments } from './Screens/Doctor/PendingAppointments';
import { BookAppointment } from './Screens/PetOwner/BookAppointment';
import { Prescription } from './Screens/Doctor/Prescription';
import { ToastContainer } from 'react-toastify';
import { Register } from './Screens/NoUsing/Register';
import { AddPet } from './Screens/NoUsing/AddPet';
import { PetHistory } from './Screens/NoUsing/PetHistory';


function App() {

  // var a = 8;

  return (

    <div>


      <Routes>
        <Route path='' element={<Login />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/petowner" element={<PetOwner />} />
        <Route path="/receptionist" element={<Receptionist />} />
        <Route path='/register' element={<Register />}></Route>
        <Route path='/addAppointment' element={<AddAppointment />}></Route>
        <Route path='/admin' element={<AdminNavbar />}></Route>
        <Route path='/addstaff' element={<AddStaff />}></Route>
        <Route path='/completedappointment' element={<CompletedAppointments />} ></Route>
        <Route path='/pendingappointment' element={<PendingAppointments />}></Route>
        <Route path='/pethistory' element={<PetHistory />}></Route>
        <Route path='/addpet' element={<AddPet />} ></Route>
        <Route path='/bookappointment' element={<BookAppointment />}></Route>
        <Route path='/prescription' element={<Prescription />}></Route>
        <Route path='/yourpet' element={<PetOwner />}></Route>
      </Routes>

      <ToastContainer />

    </div>

  );
}

export default App;
