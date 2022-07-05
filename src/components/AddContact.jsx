import Button from "./Button";
export default function AddContact(){
    return(
        <form className="add-form">
            <div className="form-control">
                <label>First name</label>
                <input type="text"/>

            </div>
            <div className="form-control">
                <label>Surname</label>
                <input type="text"/>

            </div>
            <div className="form-control">
                <label>Email</label>
                <input type="text"/>

            </div>
            <div className="form-control">
                <label>Phone Number</label>
                <input type="text"/>

            </div>
            <Button text="Save" />
        </form>
    );
}