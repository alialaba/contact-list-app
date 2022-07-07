import { Link } from "react-router-dom";
import Button from "./Button";
export default function Header(){
    return(
        <header className="header flex">
            <h2>Contact List</h2>
            <Link to="/AddContact"><Button text="Add Contact"/></Link>


        </header>
        )
}