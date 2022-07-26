import { useState } from "react";
import Button from "./Button";
import {  useNavigate } from 'react-router-dom';

export default function AddContact({addContact}){
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        // open: false,
    })

    //hook for redirect/ navigation
    const navigate = useNavigate()


    // handle change
    const handleChange=(event)=>{
        const {name, value} = event.target
        setFormData(prevFormData=>{
            return{
                ...prevFormData,
                [name]:value
            }
        })
    }

    //on submit form 
    const handleSubmit=(event)=>{
       event.preventDefault();
       if(!formData.name){
        alert("please fill out the field")
        return;
       }

       //add new input datas on submiting form
       addContact(formData)

       //empty the input field after submitting form
       setFormData({
        name:"",
        email:"",
        phone:"",
        // open: false,
       })
      //redirect back to home page
      navigate("/")
    }
    return(
        <form className="add-form" onSubmit={handleSubmit}>
            <h1>Add Contact</h1>
            <div className="form-control">
                <label>Name</label>
                <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                />

            </div>
            
            <div className="form-control">
                <label>Email</label>
                <input 
                 type="text"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 />

            </div>
            <div className="form-control">
                <label>Phone Number</label>
                <input 
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                />

            </div>
            <Button text="Save" />
        </form>
    );
}