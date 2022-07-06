import Contact from "./Contact"
export default function ContactList({contacts, onExpand}){
    return(
    <div className="contactlist">{contacts.map((contact)=><Contact contact={contact} key={contact.id} onExpand={onExpand}/>)}</div>
    )
    
}