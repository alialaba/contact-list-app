import { useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from "./Button";

export default function EditContact ({editContact, contact}){

//hook use to pass data
const location = useLocation();
//hook use to navigate
const navigate = useNavigate();

//from state pass to contact.js  which allow individual data to be passed
var contact = location.state?.contact;
console.log(location)
console.log(contact.id)

    const [editedData,setEditedData] =useState({
        id: contact.id,
        name:contact.name,
        email:contact.email,
        phone:contact.phone,
    });

    // console.log(editedData)

    const handleEditChange=(event)=>{
        const {name,value} = event.target
        setEditedData(initialEdit=>{
            return{
                ...initialEdit,
                [name]:value
            }
        })

    }

    //on submit form 
    const handleSubmit=(event)=>{

        event.preventDefault()
        if(!editedData.name){
            alert("Fill all the field input");
            return;
        }

        editContact(editedData);
        //redirect to home 
        navigate("/")
        alert("Edited Successfully")
    }

    return(
        <form className="edit-form" onSubmit={handleSubmit} >
            <h1>Edit Contact</h1>
           
            <div className="form-control">
                <label>Name</label>
                <input 
                type="text" 
                name="name"
                value={editedData.name}
                onChange={handleEditChange}
                />

            </div>
            
            <div className="form-control">
                <label>Email</label>
                <input 
                 type="text"
                 name="email"
                 value={editedData.email}
                 onChange={handleEditChange}
                 />

            </div>
            <div className="form-control">
                <label>Phone Number</label>
                <input 
                type="text"
                name="phone"
                value={editedData.phone}
                onChange={handleEditChange}
                />

            </div>
            <Button text="update" />
        </form>
    );
}