// import { Link } from "react-router-dom";
// import Button from "./Button";
import Contact from "./Contact";
import Header from "./Header";

export default function ContactList({contacts, onExpand}){
    return(
    <>
     <Header/>
    <section className="contactlist">
        
        {contacts.map((contact)=><Contact contact={contact} key={contact.id} onExpand={onExpand}/>)}
    </section>
    </>
    )
    
}