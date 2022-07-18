import { Link } from "react-router-dom";
import {FaPlus} from "react-icons/fa"
import Button from "./Button";
export default function Header(){
    return(
        <header className="header flex">
            <h2>Contact List</h2>
            <Link className="plus-circle" to="/AddContact"><FaPlus /></Link>


        </header>
        )
}