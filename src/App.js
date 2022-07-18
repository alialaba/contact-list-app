import { useState , useEffect} from "react";
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


useEffect(()=>{
  const getContacts = async()=>{
    const contactsFromServer = await fetchContacts();
    setContacts(contactsFromServer);
  
  }
  getContacts()
},[])


//fetch contact
const fetchContacts = async()=>{
  const res = await fetch("http://localhost:5000/contacts");
  const data = await res.json();
  return data

}

//delete task
const deleteTask = async(id)=>{
  await fetch(`http://localhost:5000/contacts${id}`,{
    method:"DELETE"
  })
setContacts(contacts.filter((contact)=> contact.id !== id))
}
//add contact
const addContact = async(contact)=>{
// console.log(data)
const res = await fetch("http://localhost:5000/contacts",{
  // Simple POST request with a JSON body using fetch
  method:"POST",
  headers:{ 'Content-Type': 'application/json' },

  body: JSON.stringify(contact)
})

const data = await res.json();
//update contact state with initial values and new value 
setContacts([...contacts, data])
}

  return (
    <main>
        {/* <Route path="expenses" element={<Expenses />} /> */}
        <h1 className="center">Contact Manager</h1>
        <div className="container">
        {/* <Header/> */}
          <Routes>
            <Route path="/"  element={contacts.length > 0 ? (<ContactList contacts={contacts} onExpand={toggleExpandContact} onDelete={deleteTask}/>) : ("No Contact to show") }></Route>
            <Route path="/AddContact" element={<AddContact  addContact={addContact}/>}/>
            {/* direct to the individual contact unique address display */}
            <Route path="/ContactDetail/:id" element={<ContactDetail/>}/>
    
        </Routes>
        </div>
    </main>
  );
}

 
