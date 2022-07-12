import { Link } from "react-router-dom";
import {FaInfoCircle} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";
import {FaTrashAlt} from "react-icons/fa";
import {FaRegCommentAlt} from "react-icons/fa"
import {FaRegEdit} from "react-icons/fa"
export default function Contact({contact, onExpand}){
    return(
        <div className="contact" onClick={()=> onExpand(contact.id)}>
        <div className="flex">
             <div>
               <h4>{contact.name}</h4>
               <p>{contact.phone}</p> 
            </div>
          <FaTrashAlt/>
        </div>

            {contact.open  &&
        <div className="contact-footer">
            <p className="center"> {contact.email}</p>
             <ul className="flex">
             <li><FaPhoneAlt/></li>
                <li><FaRegCommentAlt/></li>
                <li><FaRegEdit/></li>
                {/* /ContactDetail/${contact.id} redirect to an individual contact details */}
               <Link to={`/ContactDetail/${contact.id}`} state={{contact:contact}} > <li><FaInfoCircle/></li></Link>
             </ul>
            
        </div>
           
               }
            
        </div>
           
        )
    
}