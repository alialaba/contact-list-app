import { useState } from "react";
import Button from "./Button";

export default function AddContact({addContact}){
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        // open: false,
    })


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
       console.log("successfully")

       //add new input datas on submiting form
       addContact(formData)

       //empty the input field after submitting form
       setFormData({
        name:"",
        email:"",
        phone:"",
        // open: false,
       })

    }
    return(
        <form className="add-form" onSubmit={handleSubmit}>
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