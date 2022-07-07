import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

export default function App() {
  const [contacts, setContacts]= useState([
    {
      id:1,
      name:"Alaba",
      open:false,
      email:"aliaba@gmail.com",
      phone:2348063611994,

    },
    {
      id:2,
      name:"Alaba",
      open:false,
      email:"aliaba@gmail.com",
      phone:2348063611994,

    },
    {
      id:3,
      name:"Idowu",
      open:false,
      email:"idowu@gmail.com",
      phone:2348063611994,

    },
    {
      id:4,
      name:"Adewale",
      open:false,
      email:"adewaale@gmail.com",
      phone:2348063611994,

    }
  ])

const toggleExpandContact =(id)=>{
setContacts(contacts.map((contact)=> contact.id === id ? {...contact, open:!contact.open}: contact))
}

  return (
    <main>
        {/* <Route path="expenses" element={<Expenses />} /> */}
        <h1 className="center">Contact Manager</h1>
        <div className="container">
        {/* <Header/> */}
          <Routes>
            <Route path="/"  element={<ContactList contacts={contacts} onExpand={toggleExpandContact}/>}></Route>
            <Route path="/AddContact" element={<AddContact />}/>
    
        </Routes>
        </div>
    </main>
  );
}

 
