import { Link } from "react-router-dom";
import {FaInfoCircle} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";
import {FaTrashAlt} from "react-icons/fa";
import {FaRegEdit} from "react-icons/fa";
import {FaUserCircle} from "react-icons/fa"

export default function Contact({contact, onExpand, onDelete}){
    return(
        <div className="contact" onClick={()=> onExpand(contact.id)}>
          
            <div className="flex-margin">
              <FaUserCircle className="user-icon"/>
            <div>
               <h4>{contact.name}</h4>
            </div>
            </div>

            {contact.open  &&
        <div className="contact-footer">
            <p className="center">Phone: {contact.phone}</p>
             <ul className="flex">
             <li><FaPhoneAlt/></li>
                <li onClick={()=> onDelete(contact.id)}><FaTrashAlt /></li>
                <Link to={`/EditContact`} state={{contact:contact}}><li ><FaRegEdit/></li></Link>
                {/* /ContactDetail/${contact.id} redirect to an individual contact details and state pass data information */}
               <Link to={`/ContactDetail/${contact.id}`} state={{contact:contact}} > <li><FaInfoCircle/></li></Link>
             </ul>
            
        </div>
           
               }
            
        </div>
           
        )
    
}