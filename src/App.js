import { useState , useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import EditContact from "./components/EditContact";

export default function App() {
  const [contacts, setContacts]= useState([])

  // const [isEditing, setIsEditing] = useState(false);

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


//fetch contacts
const fetchContacts = async()=>{
  const res = await fetch("http://localhost:5000/contacts");
  const data = await res.json();
  return data

}

//fetch contact
// const fetchContact= async(id)=>{
//   const res = await fetch(`http://localhost:5000/contacts/${id}`)
//   const data = await res.json();
//   // console.log(data)
//   return data
// }

//delete task
const deleteTask = async(id)=>{
  await fetch(`http://localhost:5000/contacts/${id}`,{
    method:"DELETE"
  })
setContacts(contacts.filter((contact)=> contact.id !== id))
}

//add contact
const addContact = async(contact)=>{
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


//edit contact
const editContact = async(contact)=>{

const res = await fetch(`http://localhost:5000/contacts/${contact.id}`,{
method: "PUT",
headers:{"Content-Type" : "application/json"},
body: JSON.stringify(contact)
})

const data = await res.json();

// destructure informations from the api data
const {id, name, phone} = data;
 // here we are mapping over the contact array - the idea is check if the contact.id matches the id we pass into the function
    // if the id's match, use the  parameter to pass in the updated contact object
    // otherwise just use old contact
setContacts(contacts.map((contact)=> contact.id === id ? {...data}: contact))

  
}


  return (
    <main>
        {/* <Route path="expenses" element={<Expenses />} /> */}
        <h1 className="center">Contact Manager</h1>
        <div className="container">
        {/* <Header/> */}
          <Routes>
            <Route path="/"  element={ <ContactList contacts={contacts} onExpand={toggleExpandContact} onDelete={deleteTask} onEdit={editContact} /> }></Route>
            <Route path="/AddContact" element={ <AddContact  addContact={addContact}/>}/>
            <Route path="/EditContact" element={<EditContact editContact={editContact}/>}/>
            {/* direct to the individual contact unique address display */}
            <Route path="/ContactDetail/:id" element={<ContactDetail/>}/>
    
        </Routes>
        </div>
    </main>
  );
}

 
