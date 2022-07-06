export default function Contact({contact, onExpand}){
    return(
        <div className="contact" onClick={()=> onExpand(contact.id)}>
        <div className="flex">
             <div>
               <h4>{contact.name}</h4>
               <p>{contact.email}</p> 
            </div>
           <p>delete</p>
        </div>

            {contact.open  &&
        <div className="contact-footer">
            <p className="center">{contact.phone}</p>
            <ul className="flex">
                <li>phone icon</li>
                <li>message icon</li>
                <li>detail icon</li>
            </ul>
        </div>
           
               }
            
        </div>
           
        )
    
}