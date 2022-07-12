import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";

export default function App() {
  const [contacts, setContacts]= useState([])

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
            {/* direct to the individual contact unique address display */}
            <Route path="/ContactDetail/:id" element={<ContactDetail/>}/>
    
        </Routes>
        </div>
    </main>
  );
}

 
