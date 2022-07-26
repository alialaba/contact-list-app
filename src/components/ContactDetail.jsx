import { Link, useLocation } from 'react-router-dom'
import Button from './Button';
export default function ContactDetail({contact}){
    const location = useLocation();
// console.log(contact)
// console.log(location);

//from state pass to contact.js  which allow individual data to be passed
var contact = location.state?.contact;
console.log(contact.name)
    return (
        <section  className="contact-detail">
            <div className="circle"></div>
            <div className="center">
            <h2>{contact.name}</h2>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
            
            </div>
            <Link to="/">
            <Button  text="Go back"/>
            </Link>
        </section>
    );
}